import React from "react";
import ReactDOM from 'react-dom'
//导入News组件
// import News from '../News';

// 导入路由
// import { BrowserRouter,Route, Routes } from 'react-router-dom';
// 导入outlet 组件
import { Outlet } from 'react-router-dom';

//导入TabBar
import { FC } from "react";
import { NavBar, TabBar } from "antd-mobile";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useLocation,
  MemoryRouter as Router,
} from "react-router-dom";

import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";

const Bottom: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    navigate(value);
  };

  const tabs = [
    {
      key: "/home/homepage",
      title: "首页",
      icon: <AppOutline />,
    },
    {
      key: "/home/todo",
      title: "我的待办",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/home/message",
      title: "我的消息",
      icon: <MessageOutline />,
    },
    {
      key: "/home/me",
      title: "个人中心",
      icon: <UserOutline />,
    },
  ];
  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};



export default class Home extends React.Component {
  //const [activeKey, setActiveKey] = useState("todo");

  render() {
    function HomePage() {
      return <div>首页</div>;
    }

    function Todo() {
      return <div>我的代办</div>;
    }

    function Message() {
      return <div>我的消息</div>;
    }

    function PersonalCenter() {
      return <div>个人中心</div>;
    }
    return (
      <div>
        {/* this is Home */}
        {/* 渲染子路由 */}
        {/* <Outlet /> */}
        {/* <Routes>  
        // <Route path="/home/news" element={<News></News>}></Route>
        </Routes> */}
        {/* TabBar */}
        {/* <TabBar>
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              // badge={item.badge}
            />
          ))}
        </TabBar> */}
        {/* <TabBar activeKey={activeKey} onChange={setActiveKey}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar> */}
        <div>
          <Routes initialEntries={["/home"]}>
            <Route
              exact
              path="/home/homepage"
              element={<HomePage></HomePage>}
            ></Route>
            <Route exact path="/home/todo" element={<Todo></Todo>}></Route>
            <Route exact path="/home/message" element={<Message />}></Route>
            <Route exact path="/home/me" element={<PersonalCenter />}></Route>
          </Routes>
        </div>
        <div>
          <Bottom />
        </div>
        
      </div>
    );
  }
}
