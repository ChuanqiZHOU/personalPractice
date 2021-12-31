import React from "react";
import ReactDOM from "react-dom";
import { NavBar, Toast} from "antd-mobile";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
//导入 utils中定位城市的方法
import { getCurrentCity } from '../../utils'
//import react-virtualized
import { List, AutoSizer } from "react-virtualized";
import NavHeader from "../../components/NavHeader";


// const NewNavBar = () => {
//   const navigate = useNavigate();
//   const handleClick = () => {
//       navigate(-1);
//   };

//   return (
//      <NavBar className="citylist-title" onBack={handleClick}>城市列表</NavBar>
//   )
// }

// 城市列表数据格式化方法
// list 就是一个城市列表的数组
//数据格式处理后，要返回2个数据，一个城市列表对象，一个是index数组
// 通过解构的方式能够拿到这两个信息
// 要先得到分类的城市数据，因为索引数据只是分类数据的key；


const formatCityData = (list) => {
  const cityList = {};
  //const cityIndex = [];
  //遍历list数组
  
  
  list.forEach(element => {
    //通过城市名称的short得到分类名称的首字母，
    const first = element.short.substring(0, 1);
    // console.log(first)

   // 首字母相同的城市，放到一个数组中
    //cityList[first] 是cityList中的一个属性
    if (cityList[first]) {
      cityList[first].push(element)
    } else {
      //若不存在则建立一个
      cityList[first] = [element]
    }
  });
   
  // 索引数据获取
    const cityIndex = Object.keys(cityList).sort()
  
  return {
    cityList,
    cityIndex
}
}

// react-virtualized List FUNC

// 列表数据的数据源
// const list = Array(100).fill('hello world');

// 每一行数据的内容的函数，其返回值就是渲染的内容
// function rowRenderer({
//   key, // Unique key within array of rows
//   index, // 索引号
//   isScrolling, // 当前项是否滚动
//   isVisible, // This row is visible within the List (eg it is not an overscanned row)
//   style, // 样式会加在每一行
// }) {
//   return (
//     <div key={key} style={style}>
//      123- {list[index]}
//     </div>
//   );
// }

// 处理字母索引的方法

const formatCityIndex = (letter) => {
  switch (letter) {
    case '#':
      return 'Current Location'
    case 'hot':
      return 'HOT'
    default:
      return letter.toUpperCase()
}
}

// 索引高度
  const title_height = 30;

// 城市名称高度
  const name_height = 30;

// 有房源城市
const house_city = ['北京', '上海', '广州', '深圳'];

export default class CityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    cityList: {},
    cityIndex: [],
    //指定高亮索引号
      activeIndex: 0,
    //go back 功能参数
      goback: null
    }
    // 创建ref对象
     this.cityListComponent = React.createRef();
  }
  
  
  async componentDidMount() {
    await this.getCityList()
    
    //调用measureOnRows,实现精确跳转

    this.cityListComponent.current.measureAllRows();
    //console.log(this.state.goback)
  }


  async getCityList() {
    const res = await axios.get('http://localhost:8080/area/city?level=1');
    //console.log(res);
    const { cityList, cityIndex } = formatCityData(res.data.body);
    // console.log(cityList, cityIndex)

    // 获取hot城市数据
    const hotRes = await axios.get("http://localhost:8080/area/hot");
    // console.log(hotRes)
    cityList['hot'] = hotRes.data.body;
    // console.log(cityList)
    cityIndex.unshift('hot');
    // console.log(cityIndex)
    
    
    //获取当前定位城市
    const curCity = await getCurrentCity();
    //console.log(curCity)
    //添加当前定位城市到cityList, cityIndex
    cityList['#'] = [curCity];
    cityIndex.unshift('#')

    this.setState({
      cityList,cityIndex
    })
    // console.log(cityIndex,cityList)
  }
  
  
  //点击城市，定位cunrrentCity到该城市
  changeCity({ label, value }) {
    if (house_city.indexOf(label) > -1) {
        //有房源
       this.setState({
        goback: 'good'
      });
      localStorage.setItem("hkzf_city", JSON.stringify({ label, value }));
     
      // console.log(this.state.goback)
    } else {
      this.setState({
        goback: null
      });
       Toast.show({
         content: "没有数据",
         duration:500,
       });
      // console.log(this.state.goback)
      }
  }
  
  //组件List显示城市列表
  // 每一行数据的内容的函数，其返回值就是渲染的内容
  rowRenderer = ({
  key, // Unique key within array of rows
  index, // 索引号
  isScrolling, // 当前项是否滚动
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // 样式会加在每一行
  }) => {
    
    // 获取每一行的索引
    const { cityIndex,cityList } = this.state;
    const letter = cityIndex[index];
    //console.log(letter);

    // 获取指定索引下的citylist
    // cityList[letter]；
   // console.log(cityList[letter])
  return (
    <div key={key} style={style} className="city">
     
      <div className="title">{formatCityIndex(letter)}</div>
      {cityList[letter].map((item) => (
        <div className="name" key={item.value} onClick={() => this.changeCity(item)}>
      {item.label}</div>
      ))}
    </div>
  );
}

// 创建动态创建每行高度的函数
  getRowHeight= ({ index })=> {
   // console.log(index);
    // 索引标题高度+ 城市数量*城市名称高度
    //this.TITLE_HEIGHT +cityList[cityIndex[index]].length*this.NAME_HEIGHT
    const { cityList, cityIndex } = this.state
    return  title_height +cityList[cityIndex[index]].length*name_height
  }
  
  // 封装渲染右侧索引列表方法
  renderCityIndex() {
//获取到cityIndex，并遍历实现渲染
    const { cityIndex, activeIndex } = this.state;
   return  cityIndex.map((item,index) => (
     <li className="city-index-item" key={item}
       onClick={() => {
         //console.log(index)
       this.cityListComponent.current.scrollToRow(index)
     }}>
        <span className={activeIndex === index? "index-active" : ''}>{item === 'hot'?'热': item.toUpperCase()} </span>
      </li>
    ));
}

  onRowsRendered = ({startIndex}) => {
  // console.log(startIndex)
    if (this.state.activeIndex !== startIndex) {
      this.setState({
        activeIndex: startIndex
      })
    }
}



  render() {
    return (
      <div className="citylist">
        {this.state.goback && <Navigate to="/home" />}
        {/* <NewNavBar></NewNavBar> */}
        <NavHeader>城市列表</NavHeader>
        <AutoSizer>
          {({ height, width }) => (
            <List
              ref={this.cityListComponent}
              height={height}
              rowCount={this.state.cityIndex.length}
              rowHeight={this.getRowHeight}
              rowRenderer={this.rowRenderer}
              width={width}
              onRowsRendered={this.onRowsRendered}
              scrollToAlignment="start"
            />
          )}
        </AutoSizer>
        <ul className="city-index">{this.renderCityIndex()}</ul>
      </div>
    );
  }
}
