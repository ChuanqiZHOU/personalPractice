import React from "react";


// 导入路由
import { BrowserRouter,Route, Routes } from 'react-router-dom';

//导入News组件
import News from '../News';
//导入TabBar
import { TabBar } from "antd-mobile";

// 导入outlet 组件
import {Outlet} from 'react-router-dom'
export default class Home extends React.Component {
  state = {
    selectedTab: "redTab",
    hidden: false,
    fullScreen: false,
  };

  renderContent(pageText) {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          textAlign: "center",
        }}
      >
        <div style={{ paddingTop: 60 }}>
          Clicked “{pageText}” tab， show “{pageText}” information
        </div>
        <a
          style={{
            display: "block",
            marginTop: 40,
            marginBottom: 20,
            color: "#108ee9",
          }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a
          style={{ display: "block", marginBottom: 600, color: "#108ee9" }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  render() {
    return (
      <div>
        this is Home
        {/* 渲染子路由 */}
        <Outlet />
        {/* <Routes>  
        <Route path="/home/news" element={<News></News>}></Route>
        </Routes> */}
        {/* TabBar */}
        <div
          style={
            this.state.fullScreen
              ? { position: "fixed", height: "100%", width: "100%", top: 0 }
              : { height: 400 }
          }
        >
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="Life"
              key="Life"
              icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat",
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat",
                  }}
                />
              }
              selected={this.state.selectedTab === "blueTab"}
              badge={1}
              onPress={() => {
                this.setState({
                  selectedTab: "blueTab",
                });
              }}
              data-seed="logId"
            >
              {this.renderContent("Life")}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat",
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat",
                  }}
                />
              }
              title="Koubei"
              key="Koubei"
              badge={"new"}
              selected={this.state.selectedTab === "redTab"}
              onPress={() => {
                this.setState({
                  selectedTab: "redTab",
                });
              }}
              data-seed="logId1"
            >
              {this.renderContent("Koubei")}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat",
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat",
                  }}
                />
              }
              title="Friend"
              key="Friend"
              dot
              selected={this.state.selectedTab === "greenTab"}
              onPress={() => {
                this.setState({
                  selectedTab: "greenTab",
                });
              }}
            >
              {this.renderContent("Friend")}
            </TabBar.Item>
            <TabBar.Item
              icon={{
                uri: "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg",
              }}
              selectedIcon={{
                uri: "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg",
              }}
              title="My"
              key="my"
              selected={this.state.selectedTab === "yellowTab"}
              onPress={() => {
                this.setState({
                  selectedTab: "yellowTab",
                });
              }}
            >
              {this.renderContent("My")}
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    );
  }
}
