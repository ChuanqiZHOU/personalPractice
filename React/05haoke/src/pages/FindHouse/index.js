import React from "react";
import ReactDOM from "react-dom";
import { Toast } from 'antd-mobile'
import './index.css'
import { getCurrentCity } from "../../utils";
import { Navigate } from "react-router-dom";
import SearchHeader from "../../components/SearchHeader";
import Filter from "./components/Filter";
import { API } from '../../utils/api'

import { BASE_URL } from "../../utils/url";

import {List, AutoSizer, WindowScroller, InfiniteLoader} from 'react-virtualized'
import HouseItem from "../../components/HouseItem";
import Sticky from "../../components/Sticky";
import NoHouse from "../../components/NoHouse"

export default class FindHouse extends React.Component {
  flag = false
  flag2 = true
  constructor(props) {
    super(props)
    this.Mounted = false
  }
  state = {
    // 当前城市
    currentCityName: '上海',
    //goback
    goback: false,

    //列表数据
    list: [],
    //列表总条数
    count: 0,
    //数据是否加载
    isloading: false,
  }

  goBack() {
    if (this.state.goback === false) {
      //有房源
      this.setState({
        goback: true,
      })
    }
  }

  // 初始化filters 实例
  filters = {}

  componentDidMount() {
    this.Mounted = true
    const currentCity = JSON.parse(localStorage.getItem('hkzf_city'))
    this.Mounted &&
      this.setState({
        currentCityName: currentCity.label,
      })

    // window.addEventListener('load', function (event) {
    //   setTimeout(() => {
    //     window.scrollTo(0, 0)
    //   })
    // })
  }

  componentDidUpdate() {
    // this.Mounted && this.searchHouseList();
    // this.Mounted = false;
    // console.log(this.filters)
  }

  componentWillUnmount() {
    this.Mounted = false
    this.flag = false
    this.flag2 = true
    //
  }

  // 接收筛选数据
  onFilter = async (filter) => {
    this.filters = filter
    // console.log('findhouseList', this.filters)
    this.flag = true
    await this.searchHouseList()
    this.flag2 = false
    //this.searchHouseList()
    this.flag = false

    
  }

  // 用来获取房屋列表数据
  async searchHouseList() {
    Toast.show('loading', 0, null, false)
    // 获取当前定位城市id
    const { value } = JSON.parse(localStorage.getItem('hkzf_city'))

    const res = await API.get('/houses', {
      params: {
        cityId: value,
        ...this.filters,
        // start: 1,
        //   end: 14
      },
    })
    const { list, count } = res.data.body
    // console.log(this.flag)
    this.flag &&
      this.setState({
        list,
        count,
      })

    //关闭loading
    Toast.clear()
    //提示房源数量
    if (count !== 0) {
      Toast.show(`找到${count}套房源`, 2, null, false)
    }

    // console.log(this.filters)
  }

  renderHouseList = ({
    key, // Unique key within array of rows
    index, // 索引号
    style, // 样式会加在每一行
    isScrolling, // 当前项是否滚动
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
  }) => {
    //根据索引，获取当前这一行的房屋数据；
    const { list, count } = this.state
    //console.log(list)
    const house = list[index]
    //判断house是否存在，
    if (!house) {
      return (
        <div key={key} style={style}>
          <p className="loading"></p>
        </div>
      )
    }
    // console.log(house)

    return (
      <div key={key} style={style}>
        <HouseItem
          src={BASE_URL + house.houseImg}
          title={house.title}
          desc={house.desc}
          tags={house.tags}
          price={house.price}
        ></HouseItem>
      </div>
    )
  }

  // 判断列表中的每一行是否加载完成
  isRowLoaded = ({ index }) => {
    return !!this.state.list[index]
  }
  // 用来获取更多房屋列表数据
  //该方法的返回值是一个promise对象，该对象在数据加载完成后，调用resolve让Promise对象的状态变为已完成；

  loadMoreRows = ({ startIndex, stopIndex }) => {
    //console.log( startIndex, stopIndex )
    return new Promise((resolve) => {
      const { value } = JSON.parse(localStorage.getItem('hkzf_city'))

      API.get('/houses', {
        params: {
          cityId: value,
          ...this.filters,
          start: startIndex,
          end: stopIndex,
        },
      }).then((res) => {
        // console.log('loademoreRows', res)
        this.setState({
          list: [...this.state.list, ...res.data.body.list],
        })
        //数据加载完成时，调用resolve即可
        // console.log(this.state.list)
        resolve()
      })
    })
  }

  //渲染列表数据
  renderList = () => {
    const { count } = this.state
    console.log(this.flag2)
    if (count === 0 && !this.flag2) {
      return <NoHouse>没有找打房源</NoHouse>
    }
    return (
      <InfiniteLoader
        isRowLoaded={this.isRowLoaded}
        loadMoreRows={this.loadMoreRows}
        rowCount={count}
      >
        {({ onRowsRendered, registerChild }) => (
          <WindowScroller>
            {({ height, isScrolling, scrollTop }) => (
              <AutoSizer>
                {({ width }) => (
                  <List
                    onRowsRendered={onRowsRendered}
                    ref={registerChild}
                    autoHeight // 设置高度为windowscroller最终渲染的列表高度
                    height={height}
                    width={width}
                    rowCount={count}
                    rowHeight={120}
                    overscanRowCount={10}
                    rowRenderer={this.renderHouseList} // 渲染列表的每一行
                    isScrolling={isScrolling}
                    scrollTop={scrollTop}
                  ></List>
                )}
              </AutoSizer>
            )}
          </WindowScroller>
        )}
      </InfiniteLoader>
    )
  }

  render() {
    const { count } = this.state

    return (
      <div className="root">
        {this.state.goback && <Navigate to={-1} />}
        <div className="navi_top">
          <i className="iconfont icon-back" onClick={() => this.goBack()}></i>
          <SearchHeader func={() => this.state.currentCityName}></SearchHeader>
        </div>
        {/* 条件筛选导航栏 */}

        <Sticky height={40}>
          <Filter onFilter={this.onFilter}> </Filter>
        </Sticky>

        {/* 房屋列表 */}
        <div className="houseItem">{this.renderList()}</div>
      </div>
    )
  }
}

//  <InfiniteLoader
//    isRowLoaded={this.isRowLoaded}
//    loadMoreRows={this.loadMoreRows}
//    rowCount={count}
//  >
//    {' '}
//    {({ onRowsRendered, registerChild }) => {
//      ;<WindowScroller>
//        {({ height, isScrolling, scrollTop }) => {
//          ;<AutoSizer>
//            {({ width }) => (
//              <List
//                onRowsRendered={onRowsRendered}
//                ref={registerChild}
//                autoHeight // 设置高度为windowscroller最终渲染的列表高度
//                height={height}
//                width={width}
//                rowCount={count}
//                rowHeight={120}
//                rowRenderer={this.renderHouseList} // 渲染列表的每一行
//                isScrolling={isScrolling}
//                scrollTop={scrollTop}
//              ></List>
//            )}
//          </AutoSizer>
//        }}
//      </WindowScroller>
//    }}
//  </InfiniteLoader>
          