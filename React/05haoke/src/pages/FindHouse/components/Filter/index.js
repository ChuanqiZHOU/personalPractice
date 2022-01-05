import React from "react";
import {useState}from 'react'

import FilterTitle from "../FilterTitle";
import FilterPicker from "../FilterPicker";
import FilterMore from "../FilterMore";

import styles from './index.module.css'

//标题高亮状态
//true 高亮， false 不高亮

const titleSelectedStatus = {
  area: false,
  mode: false,
  price: false,
  more: false,
}


  
export default function Filter() {
  const [tss, setTss] = useState(titleSelectedStatus);
  // 点击标题菜单
  const onTitleClick = (type) => {
    setTss(cur => {
      return {
        tss: {
          ...cur.tss,
          [type]:true
        }
      }
    })
    
  }
  //console.log(tss)
    return (
      <div className={styles.root}>
        {/* 前三个菜单的遮罩层
            <div className={styles.mask}></div> */}

        <div className={styles.content}>
          {/* 标题栏 */}
          <FilterTitle tss={tss} titleClick= {(type)=>onTitleClick(type)} />

          {/* 前三个菜单对应的内容
            <FilterPicker></FilterPicker> */}

          {/* 最后一个菜单对应的内容
                <FilterMore></FilterMore>
                 */}
        </div>
      </div>
    )
  
}