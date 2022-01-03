import React from 'react'
import { useNavigate } from 'react-router-dom';
import './SearchHeader.css'
export default function SearchHeader(props) {

    const navigate = useNavigate();
  const currCityName = props.func();
  return (
    <div className="search-box">
      <div className="search">
        <div className="location" onClick={() => navigate("/cityList")}>
          <span className="name" >{currCityName}</span>
          <i className="iconfont icon-arrow"></i>
        </div>
        <div className="form" onClick={() => navigate("/search")}>
          <i className="iconfont icon-seach"></i>
          <span className="text">请输入小区地址</span>
        </div>
      </div>
      <span>
        <i
          className="iconfont icon-map"
          onClick={() => navigate("/map")}
        ></i>
      </span>
    </div>
  );

}