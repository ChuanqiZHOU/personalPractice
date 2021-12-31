import React from "react";
import ReactDOM from "react-dom";

import NavHeader from "../../components/NavHeader";

export default class Map extends React.Component{
    componentDidMount() {
        //获取当前定位城市
        const { label, value } = JSON.parse(localStorage.getItem("hkzf_city"));
        // console.log(label, value)

        //初始化地图实例
        const map = new window.BMap.Map("container");
        // //设置中心点坐标
        // const point = new window.BMap.Point(116.404, 39.915); 
        //地址解析器，获得城市的坐标
        const myGeo = new window.BMap.Geocoder();

        myGeo.getPoint(label,
            (label => { 
            if (label) {
                map.centerAndZoom(label, 16);
                // 添加常用控件， 平移缩放控件
                map.addControl(new window.BMap.NavigationControl());
                 map.addControl(new window.BMap.ScaleControl());
            }
        }), label);

        // 初始化地图
        // map.centerAndZoom(label, 15);
        // map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

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