import React from "react";
import ReactDOM from "react-dom";

import './index.css'
import { getCurrentCity } from "../../utils";
import { Navigate } from "react-router-dom";
import SearchHeader from "../../components/SearchHeader";
import Filter from "./components/Filter";

export default class FindHouse extends React.Component {
  state = {
    // 当前城市
    currentCityName: "上海",
    //goback
    goback: false
  };
  
  goBack() {
    if (this.state.goback === false) {
      //有房源
      this.setState({
        goback: true
      });
    }
  }
  componentDidMount() {
    
    const currentCity = JSON.parse(localStorage.getItem('hkzf_city'));
    this.setState({
      currentCityName: currentCity.label,
    });
    //console.log(this.state.goback)
  }

  render() {
    return (
      <div>
         {this.state.goback && <Navigate to={-1}/>}
        <div className="navi_top">
          <i className="iconfont icon-back" onClick={()=> this.goBack()}></i>
          <SearchHeader func={() => (this.state.currentCityName)}></SearchHeader>
        </div>
        {/* 条件筛选导航栏 */}
        <div>
          <Filter></Filter>
        </div>
      </div>
    );
  }
}

