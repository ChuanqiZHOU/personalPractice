import React from "react";
import ReactDOM from "react-dom";

// 导入路由
import { BrowserRouter,Route, Routes } from 'react-router-dom';

//导入News组件
import News from '../News'
// 导入outlet 组件
import {Outlet} from 'react-router-dom'
export default class Home extends React.Component {
  render() {
    return (<div>this is Home
      {/* 渲染子路由 */}
      <Outlet/>
        {/* <Routes>  
        <Route path="/home/news" element={<News></News>}></Route>
        </Routes> */}
      
    </div>)
  }
}
