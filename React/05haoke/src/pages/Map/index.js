import React from "react";
import ReactDOM from "react-dom";

import NavHeader from "../../components/NavHeader";

export default class Map extends React.Component{
    componentDidMount() {
        this.initMap()
    }
    initMap() {
      //获取当前定位城市
      const { label, value } = JSON.parse(localStorage.getItem("hkzf_city"));
      // console.log(label, value)

      //初始化地图实例
      const map = new window.BMap.Map("container");
      // //设置中心点坐标
      // const point = new window.BMap.Point(116.404, 39.915);
      //地址解析器，获得城市的坐标
      const myGeo = new window.BMap.Geocoder();

      myGeo.getPoint(
        label,
        (label) => {
          if (label) {
            map.centerAndZoom(label, 16);
            // 添加常用控件， 平移缩放控件
            map.addControl(new window.BMap.NavigationControl());
              map.addControl(new window.BMap.ScaleControl());
            //添加文本标注覆盖物
            var opts = {
            position: label, // 指定文本标注所在的地理位置
            offset: new window.BMap.Size(30, -30), // 设置文本偏移量
            };
            // 创建文本标注对象
            var label1 = new window.BMap.Label("文本覆盖物", opts);
            // 自定义文本标注样式
            label1.setStyle({
             color: "blue",
         
            });
            //添加到地图中
             map.addOverlay(label1);  
          }
        },
        label
      );

      // 初始化地图
      // map.centerAndZoom(point, 15);

      
    }
    render()
    {
        return (
        <div className="map">
            {/* 顶部导航栏 */}
            <NavHeader>地图选房</NavHeader>
        <div id="container"></div>
        </div>)
    }
} 