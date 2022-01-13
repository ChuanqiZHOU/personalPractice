import React from "react";
import ReactDOM from "react-dom";
import styles from './index.module.css'
import NavHeader from "../../components/NavHeader";
import HouseItem from "../../components/HouseItem";
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Toast, Loading } from 'antd-mobile'
import { BASE_URL } from '../../utils/url.js'
import { API } from "../../utils/api";

export default class Map extends React.Component {

  state = {
    // 小区下的成员列表
    houseList: [],
    //表示是否展示房源列表
    isShowList: false
  }
  componentDidMount() {
    this.initMap();
  }
  initMap() {
    //获取当前定位城市
    const { label, value } = JSON.parse(localStorage.getItem("hkzf_city"));
    // console.log(label, value)

    //初始化地图实例
    const map = new window.BMap.Map("container");
    // 能够在其他方法中通过this 调用map
    this.map = map;
    // //设置中心点坐标
    // const point = new window.BMap.Point(116.404, 39.915);
    //地址解析器，获得城市的坐标
    const myGeo = new window.BMap.Geocoder();

    myGeo.getPoint(
      label,
      async (point) => {
        if (point) {
          map.centerAndZoom(point, 11);
          // 添加常用控件， 平移缩放控件
          map.addControl(new window.BMap.NavigationControl());
          map.addControl(new window.BMap.ScaleControl());

          // 调用renderOverlays()
          this.renderOverlays(value);
          // // 获取房源数据
          // const res = await axios.get(
          //   `http://localhost:8080/area/map?id=${value}`
          // );
          // console.log(res);
          // res.data.body.forEach((item) => {
          //   // create cover for each item
          //   const {
          //     coord: { longitude, latitude },
          //     label: areaName,
          //     count,
          //     value: itemValue
          //   } = item;
          //   // 创建文本标注对象,设置setContent后第一个参数就失效了
          //   // var opts = {
          //   //   position: new window.BMap.Point(longitude, latitude), // 指定文本标注所在的地理位置
          //   //   offset: new window.BMap.Size(-35, -35), // 设置文本偏移量
          //   // };

          //   // 创建一个areaPoint
          //   const areaPoint = new window.BMap.Point(longitude, latitude);
          //   const label = new window.BMap.Label("", {
          //     position: areaPoint, // 指定文本标注所在的地理位置
          //     offset: new window.BMap.Size(-35, -35), // 设置文本偏移量
          //   });

          //   // 添加唯一标识
          //   label.id = itemValue;
          //   //设置房源覆盖物内容
          //   label.setContent(`<div class="${styles.bubble}">
          //     <p class="${styles.name}">${areaName}</p>
          //     <p>${count}套</p>
          //      </div >`);

          //   //设置文本标注样式
          //   const labelStyle = {
          //     cursor: "pointer",
          //     border: "0px solid rgb(255,0,0)",
          //     padding: "0px",
          //     whiteSpace: "nowrap",
          //     fontsSize: "12px",
          //     color: "rgb(255, 255, 255)",
          //     textAlign: "center",
          //   };

          //   // 自定义文本标注样式
          //   label.setStyle(labelStyle);
          //   // 添加单击事件
          //   label.addEventListener("click", () => {
          //     console.log("房源覆盖物被点击了");
          //     //以当前覆盖物为中心放大地图
          //     map.centerAndZoom(areaPoint, 13);

          //     //清除当前覆盖物信息
          //     //直接清除会报错，所以加setTimeout
          //     setTimeout(() => {
          //       map.clearOverlays()
          //     },0)
          //     ;
          //   });

          //   //添加到地图中
          //   map.addOverlay(label);
          //});

          //添加文本标注覆盖物
          //更改label内的HTML
          // <div class="${styles.bubble}">
          // <p class="${styles.name}">${name} </p>
          // <p>${num}套</p>
          // </div >
        }
      },
      label
    );
    //给地图绑定movestart 监听事件
    map.addEventListener('movestart', () => {
      // console.log('movestart')
      if (this.state.isShowList) {
        this.setState({
          isShowList:false
        })
      }

    })
    // 初始化地图
    // map.centerAndZoom(point, 15);
  }

  // 渲染覆盖物入口，接收区域id，获取该区域下的房源数据，获取房源类型以及下一级地图的缩放级别
  async renderOverlays(id) {
    // 开启loading
    Toast.show({
      content: <Loading />,
      duration: 0,
    });

    const res = await API.get(`/area/map?id=${id}`);
    // console.log(res)
    //数据加载完成，关闭Toast
    Toast.clear();
    const data = res.data.body;

    // 调用getTypeAndZoom 获取级别和类型
    const { type, nextZoom } = this.getTypeAndZoom();
    data.forEach((item) => {
      // 为每一个item创建覆盖物
      this.createOverlays(item, nextZoom, type);
    });
  }

  //计算绘制的覆盖物类型以及缩放级别
  // 区 11 范围  >=10 <12
  // 镇 13 范围 >= 12 <14
  // 小区 15 范围 >=14 <16
  getTypeAndZoom() {
    //调用地图的getzZoom(),来获取当前缩放级别
    // 要拿到地图的对象，但是map是在initMap中创建的，如果想在另外一个方法中用，就交给this
    const zoom = this.map.getZoom();
    console.log(zoom)

    let type, nextZoom;
    if (zoom >= 10 && zoom < 12) {
      type = "circle";
      nextZoom = 13;
    } else if (zoom >= 12 && zoom < 14) {
      type = "circle";
      nextZoom = 15;
    } else if (zoom >= 14 && zoom < 16) {
      type = "rect";
    }
    return { type, nextZoom };
  }

  //创建覆盖物
  createOverlays(data, zoom, type) {
    const {
      coord: { longitude, latitude },
      label: areaName,
      count,
      value: itemValue,
    } = data;

    //创建一个areaPoint
    const areaPoint = new window.BMap.Point(longitude, latitude);
    if (type === "circle") {
      // 区或者镇
      this.createCircle(areaPoint, areaName, count, itemValue, zoom);
    } else {
      //小区
      this.createRect(areaPoint, areaName, count, itemValue);
    }
  }

  //创建区，镇的覆盖物
  createCircle(areaPoint, areaName, count, id, zoom) {
    const label = new window.BMap.Label("", {
      position: areaPoint, // 指定文本标注所在的地理位置
      offset: new window.BMap.Size(-35, -35), // 设置文本偏移量
    });

    // 添加唯一标识
    label.id = id;
    //设置房源覆盖物内容
    label.setContent(`<div class="${styles.bubble}">
                <p class="${styles.name}">${areaName}</p>
                <p>${count}套</p>
                 </div >`);

    //设置文本标注样式
    const labelStyle = {
      cursor: "pointer",
      border: "0px solid rgb(255,0,0)",
      padding: "0px",
      whiteSpace: "nowrap",
      fontsSize: "12px",
      color: "rgb(255, 255, 255)",
      textAlign: "center",
    };

    // 自定义文本标注样式
    label.setStyle(labelStyle);
    // 添加单击事件
    label.addEventListener("click", () => {
      console.log("房源覆盖物被点击了");
      //以当前覆盖物为中心放大地图
      this.map.centerAndZoom(areaPoint, zoom);
      //调用该区域下的房源数据
      this.renderOverlays(id);
      //清除当前覆盖物信息
      //直接清除会报错，所以加setTimeout
      setTimeout(() => {
        this.map.clearOverlays();
      }, 0);
    });

    //添加到地图中
    this.map.addOverlay(label);
  }

  // 创建小区覆盖物
  createRect(areaPoint, areaName, count, id) {
    const label = new window.BMap.Label("", {
      position: areaPoint, // 指定文本标注所在的地理位置
      offset: new window.BMap.Size(-50, -25), // 设置文本偏移量
    });

    // 添加唯一标识
    label.id = id;
    //设置房源覆盖物内容
    label.setContent(`<div class="${styles.rect}">
      <span class="${styles.housename}">${areaName}</span>
      <span class="${styles.housenum}">${count}</span>
      <i class="${styles.arrow}"></i>
      </div>;`);

    //设置文本标注样式
    const labelStyle = {
      cursor: "pointer",
      border: "0px solid rgb(255,0,0)",
      padding: "0px",
      whiteSpace: "nowrap",
      fontsSize: "12px",
      color: "rgb(255, 255, 255)",
      textAlign: "center",
    };

    // 自定义文本标注样式
    label.setStyle(labelStyle);
    // 添加单击事件
    label.addEventListener("click", (e) => {
      // console.log("rect小区被点击了");
      // console.log(e);
      this.getHouseList(id);
      
      //获取当前被点击item的屏幕内位置
      const target = e.changedTouches[0];
      //const target = e.domEvent.changedTouches[0];
      console.log(target.clientX);
      // console.log(window.innerHeight, window.innerWidth);
     
      this.map.panBy(window.innnerWidth / 2 - target.clientX, (window.innerHeight - 330) / 2 - target.clientY)

      
    });

    //添加到地图中
    this.map.addOverlay(label);
  }
  
  // 获取小区房源数据
  async getHouseList(id) {
    try {
      // 开启loading
      Toast.show({
        content: <Loading />,
        duration: 0,
      });

      const res = await API.get(`/houses?cityId=${id}`);

      //关闭toast loading
      Toast.clear();
      // console.log(res);

      this.setState({
        houseList: res.data.body.list,
        //展示房源列表
        isShowList: true,
      });
    } catch (e) {
      Toast.clear();
    }
  }

  renderHouseList() {
    return this.state.houseList.map((item) => (
      <HouseItem
        key={item.houseCode}
        src={BASE_URL + item.houseImg}
        title={item.title}
        desc={item.desc}
        tags={item.tags}
        price= { item.price }
      ></HouseItem>
      // <div className={styles.house} key={item.houseCode}>
      //   <div className={styles.imgWrap}>
      //     <img
      //       className={styles.img}
      //       src={BASE_URL + item.houseImg}
      //       alt=""
      //     />
      //   </div>
      //   <div className={styles.content}>
      //     <h3 className={styles.title}>{ item.title}</h3>
      //     <div className={styles.desc}>{item.desc}</div>
      //     <div>
      //     {item.tags.map(
      //   (tag, index) =>{
      //   const tagClass = 'tag' + (index + 1);
      //   return (<span className={[styles.tag, styles[tagClass]].join(" ")} key={tag}>
      //     {tag}
      //   </span>)
      //   })}
      //     </div>
      //     <div className={styles.price}>
      //       <span className={styles.priceNum}>{item.price}</span>元/月
      //     </div>
      //   </div>
      // </div>
    ))
  }
  
  render() {
    return (
      <div className="map">
        {/* 顶部导航栏 */}
        <NavHeader>地图选房</NavHeader>
        <div id="container" className="{styles.container"></div>
        {/* 房源列表 */}
        {/* 添加styles.show 展示房屋列表 */}
        <div className={
          this.state.isShowList ? 
            [styles.houseList,styles.show].join(" ")
          : styles.houseList
         }>
          <div className={styles.titleWrap}>
            <h1 className={styles.listTitle}>房屋列表</h1>
            <Link className={styles.titleMore} to="/home/list">
              More
            </Link>
          </div>
          <div className={styles.houseItems}>
            {/* 房屋结构 */}
           {this.renderHouseList()}
          </div>
        </div>
      </div>
    );
  }
} 

// 小区覆盖物的结构
{/* <div class="${styles.rect}">
  <span class="${styles.housename}">${name}</span>
  <span class="${styles.housenum}">${num}</span>
  <i class="${styles.arrow}"></i>
</div>; */}