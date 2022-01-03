import React from "react";
import ReactDOM from 'react-dom'
import{useNavigate} from 'react-router-dom'

import { Swiper } from "antd-mobile";
import styles from "./swipersNavi2GroupsNews.css";
import axios from 'axios'
//导入 环境变量
import { BASE_URL } from "../../utils/url";

//引入SearchHeader组件
import SearchHeader from "../../components/SearchHeader"
//导入navi2 item logo
import navi2Logo1 from '../../assets/images/nav-1.png'
import navi2Logo2 from "../../assets/images/nav-2.png";
import navi2Logo3 from "../../assets/images/nav-3.png";
import navi2Logo4 from "../../assets/images/nav-4.png";


// 导入路由
// import { BrowserRouter,Route, Routes } from 'react-router-dom';
// 导入outlet 组件
import { Outlet } from 'react-router-dom';

// 导入Grid 栅格 dropdown
import { Grid} from 'antd-mobile'

//导入 utils中定位城市的方法
import {getCurrentCity} from '../../utils'

// 导航的数组
const navs = [
  {
    id: 1,
    img: navi2Logo1,
    title: "整租",
    path: "/find",
  },
  {
    id: 2,
    img: navi2Logo2,
    title: "合租",
    path: "/find",
  },
  {
    id: 3,
    img: navi2Logo3,
    title: "地图找房",
    path: "/map",
  },
  {
    id: 4,
    img: navi2Logo4,
    title: "出租",
    path: "/find",
  }
];
// 渲染导航菜单

const RenderNavs = () => {
  const navigate = useNavigate();
  return navs.map(item => (
    <div className="navi2_item" key={item.id} onClick={() => navigate(item.path)}>
      <div className="navi2_item_logo">
        <img src={item.img} alt="" />
      </div>
      <div className="navi2_item_discription">{item.title}</div>
    </div>
  ));
};
const Navi2 = () => (
  <div className="navi2">
    <RenderNavs></RenderNavs>
  </div>
);

 // 租房小组的title
const RentGroups = () => {
  return (
    <div className="rentGroups">
      <div className= 'rentGroups_top'>
        <span className="rentGroups_title">租房小组</span>
        <span className="rentGroups_more">更多</span>
      </div>
    </div>
  );

  }
  


//H5获取定位信息
// const realPosition = navigator.geolocation.getCurrentPosition(position => {
//   console.log(position)
// })

export default class Home extends React.Component {
  state = {
    // swipers data
    swipers: [],
    isSwiperLoaded: false,
    //添加groups租房小组数据
    groups: [],
    // 添加最新资讯
    news: [],
    // 当前城市
    currentCityName: '上海',
    //goback
    // goback: null
  }

  // get the data to swipers
  async getSwipers() {
    const res = await axios.get('http://localhost:8080/home/swiper');
    // console.log(res)
    this.setState({
      swipers: res.data.body,
      isSwiperLoaded: true
    })
    
  }

  async getGroups() {
    const res = await axios.get(
      "http://localhost:8080/home/groups", {
        params: {
          area: 'AREA%7C88cff55c-aaa4-e2e0'
        }
      }
    );
    // console.log(res)
    this.setState({
      groups: res.data.body
    })
  }

  async getNews() {
    const res = await axios.get(
      "http://localhost:8080/home/news?area=AREA%7C88cff55c-aaa4-e2e0"
    );
    // console.log(res);
    this.setState({
      news: res.data.body
    })
  }


 async componentDidMount() {
  this.getSwipers();
    this.getGroups();
   this.getNews();
   
    
    //通过IP获取当前城市名称
    // const currentCity = new window.BMap.LocalCity();
    // currentCity.get(async res => {
    //   // console.log(res)
    //   const result = await axios.get(`http://localhost:8080/area/info?name=${res.name}`);
    //   // console.log(result);
    //   this.setState({
    //     currentCityName: result.data.body.label
    //   })
    // })
    const currentCity = await getCurrentCity();
    this.setState({
      currentCityName: currentCity.label
    })


  }

  renderSwipers() {
    return this.state.swipers.map(item => (
  <Swiper.Item key={item.id}>
   <img className='imgProps' src={ BASE_URL + item.imgSrc} alt="" />
  </Swiper.Item>
));
  }

  renderGroups() {
    return this.state.groups.map((item) => (
      <Grid.Item key={item.id} className="grid_item">
        <div className="grid_item_l">
          <span className="grid_item_l_title">{item.title}</span>
          <span className="grid_item_l_desc">{item.desc}</span>
        </div>
        <div className="grid_item_r">
          <img src={`http://localhost:8080${item.imgSrc}`} alt="" />
        </div>
      </Grid.Item>
    ));
  }

  renderNews() {
    return this.state.news.map(item => (
      <div className="newsContent" key={item.id}>
        <div className='newsContent_img'>
          <img src={`http://localhost:8080${item.imgSrc}`} alt="" />
        </div>
        <div className="newsContent_discription">
          <div className="newsContent_title">
                {item.title}
          </div>
          <div className="newsContentFromTo">
            <span>{item.from}</span>
            <span>{item.date}</span>
          </div>
        </div>
        
     </div>
   ))
 }
  render() {
    
    return (
      <div>
        {/* {<Outlet></Outlet>} */}
        <div className="ads_swiper">
          {this.state.isSwiperLoaded ? (
            <Swiper className="renderSwipers" autoplay loop allowTouchMove>
              {this.renderSwipers()}
            </Swiper>
          ) : (
            ""
          )}
          <div className="navi_top">
            <SearchHeader func={() => (this.state.currentCityName )}></SearchHeader>
          </div>
        </div>
        <Navi2></Navi2>
        <RentGroups></RentGroups>
        <Grid columns={2} gap={8}>
          {this.renderGroups()}
        </Grid>
        <div className="news_title">最新资讯</div>
        <div>{this.renderNews()}</div>
      </div>
    );
  }
}
