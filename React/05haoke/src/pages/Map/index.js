import React from "react";
import ReactDOM from "react-dom";

export default class Map extends React.Component{
    componentDidMount() {
        //初始化地图实例
        const map = new window.BMap.Map("container");
        //设置中心点坐标
        const point = new window.BMap.Point(116.404, 39.915); 
        // 初始化地图
    map.centerAndZoom(point, 15)

    }
    render()
    {
        return <div className="map">
        <div id="container"></div>
        </div>
    }
} 