import React from "react";
import ReactDOM from 'react-dom'



// 导入路由
// import { BrowserRouter,Route, Routes } from 'react-router-dom';
// 导入outlet 组件
import { Outlet } from 'react-router-dom';

export default class Home extends React.Component {
  //const [activeKey, setActiveKey] = useState("todo");

  render() {
    
    return (
      <div >
        this is homepage
        {<Outlet></Outlet>}
        </div >
        
        
    );
  }
}
