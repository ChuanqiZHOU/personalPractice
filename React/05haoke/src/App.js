import react from "react";
import { Button } from "antd-mobile";

// 导入路由
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

// 导入Home, citylist
import Home from './pages/Home';
import CityList from "./pages/CityList";
// 导入News
import News from './pages/News';

function App() {
  return (
    <div className="App">
      {/* 项目跟组件 <Button>项目登录</Button> */}
      {/* 配置导航菜单 */}
      <ul>
        <li>
          <Link to="/home">首页</Link>
        </li>
        <li>
          <Link to="/citylist">City</Link>
        </li>
        <li>
          <Link to="/home/news">嵌套</Link>
        </li>
      </ul>

      {/* 配置路由 */}

      <Routes>
        <Route path="/home" element={<Home></Home>}>
          <Route path="news" element={<News></News>}></Route>
        </Route>
        <Route path="/citylist" element={<CityList></CityList>}></Route>
      </Routes>
    </div>
  );
}

export default App;
