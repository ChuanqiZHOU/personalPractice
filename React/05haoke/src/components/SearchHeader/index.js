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

// 注意 本部分可以使用 function组件重新写一遍；
// 组件的参数，可以是多个，可以导入className 设定组件的样式
// 在父组件中，可以使用 类名 :global(.子类名)的形式设定样式
// 可以添加属性校验
// SearchHeader.propTypes= {
// func: PropTypes.func.isRequired
// }