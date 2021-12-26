import React from "react";
import ReactDOM from 'react-dom'
import{useNavigate} from 'react-router-dom'

import { Swiper } from "antd-mobile";
import styles from './swipers_navi2_groups.css'
import axios from 'axios'
//导入navi2 item logo
import navi2Logo1 from '../../assets/images/nav-1.png'
import navi2Logo2 from "../../assets/images/nav-2.png";
import navi2Logo3 from "../../assets/images/nav-3.png";
import navi2Logo4 from "../../assets/images/nav-4.png";


// 导入路由
// import { BrowserRouter,Route, Routes } from 'react-router-dom';
// 导入outlet 组件
import { Outlet } from 'react-router-dom';

// 导入Grid 栅格
import {Grid} from 'antd-mobile'
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
    path: "/find",
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
  


export default class Home extends React.Component {
  state = {
    // swipers data
    swipers: [],
    isSwiperLoaded: false,
    //添加groups租房小组数据
    groups:[]
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
    console.log(res)
    this.setState({
      groups: res.data.body
    })
  }
  componentDidMount() {
  this.getSwipers();
      this.getGroups()
  }

  renderSwipers() {
    return this.state.swipers.map(item => (
  <Swiper.Item key={item.id}>
   <img className='imgProps' src={`http://localhost:8080${item.imgSrc}`} alt="" />
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
        </div>
        <Navi2></Navi2>
        <RentGroups></RentGroups>
        <Grid columns={2} gap={8}>
          {this.renderGroups()}
        </Grid>
      </div>
    );
  }
}
