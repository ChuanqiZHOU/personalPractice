import React from "react";
import ReactDOM from 'react-dom'

import { Swiper } from "antd-mobile";
import styles from './swipers.css'
import axios from 'axios'

// 导入路由
// import { BrowserRouter,Route, Routes } from 'react-router-dom';
// 导入outlet 组件
import { Outlet } from 'react-router-dom';



export default class Home extends React.Component {
  state = {
    // swipers data
    swipers: []
  }

  // get the data to swipers

  async getSwipers() {
    const res = await axios.get('http://localhost:8080/home/swiper');
    // console.log(res)
    this.setState({
      swipers: res.data.body
    })
    
  }
  componentDidMount() {
    this.getSwipers()
  }

  renderSwipers() {
    return this.state.swipers.map(item => (
  <Swiper.Item key={item.id}>
   <img className='imgProps' src={`http://localhost:8080${item.imgSrc}`} alt="" />
  </Swiper.Item>
));
  }


  
  render() {
    
    return (
      <div >
        {/* {<Outlet></Outlet>} */}

        <Swiper className='renderSwipers'  loop allowTouchMove>
          {this.renderSwipers()}
        </Swiper>
      </div>
    );
  }
}
