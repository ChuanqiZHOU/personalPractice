//import react from "react";
//import { Button } from "antd-mobile";
import './cssForTabBar.css';
// 导入路由
import {
  BrowserRouter,
  useNavigate,
  useLocation,
  MemoryRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
  Navigate
} from "react-router-dom";

// 导入Home, citylist News  MyProfile
import Home from './pages/Home';
import FindHouse from "./pages/FindHouse";
import News from './pages/News';
import MyProfile from './pages/MyProfile';
import CityList from './pages/CityList';
import Map from "./pages/Map";

// 导入TabBar
import { FC } from "react";
import { NavBar, TabBar } from "antd-mobile";



const Bottom: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let { pathname } = location;
  
  const setRouteActive = (value: string) => {
    navigate(value);
  };

  const tabs = [
    {
      key: "/home",
      title: "首页",
      icon: <i className="iconfont icon-ind"></i>,
    },
    {
      key: "/find",
      title: "找房",
      icon: <i className="iconfont icon-findHouse"></i>,
    },
    {
      key: "/news",
      title: "资讯",
      icon: <i className="iconfont icon-infom"></i>,
    },
    {
      key: "/myprofile",
      title: "个人中心",
      icon: <i className="iconfont icon-my"></i>,
    },
  ];

  //让首页成为/home，同时菜单高亮
  // pathname = pathname === '/' ? '/home' : pathname;
  
  return (
    <TabBar
      activeKey={pathname}
      onChange={(value) => setRouteActive(value)}
    >
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

function App() {
  return (
    <div className="App">
      <div className="app">
        {/* 配置路由 */}
        <div className="appbody">
          <Routes>
            {/* <Route path="/" element={<Home></Home>}></Route> */}
            <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/news" element={<News></News>}></Route>
            <Route path="/find" element={<FindHouse></FindHouse>}></Route>
            <Route path="/myprofile" element={<MyProfile></MyProfile>}></Route>
            <Route path="/citylist" element={<CityList></CityList>}></Route>
            <Route path="/map" element={<Map></Map>}></Route>
          </Routes>
        </div>
        <div className="appbottom">
          <Bottom></Bottom>
        </div>
      </div>
    </div>
  );
}

export default App;
