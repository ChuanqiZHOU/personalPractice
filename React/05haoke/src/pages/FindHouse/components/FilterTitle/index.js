import React from "react";
import styles from './index.module.css'

//条件筛选栏标题组
const titleList = [
  { title: '区域', type: 'area' },
  { title: '方式', type: 'mode' },
  { title: '租金', type: 'price' },
  { title: '筛选', type: 'more' }]
  
  // 可以采用解构的方式导入props
export default function FilterTitle({tss, titleClick}) {
 // console.log(titleClick);
  const tss1 = tss;
  console.log(tss)
  return (
    <div className={styles.root}>
      {
        titleList.map(item => {
          const isSelected = tss[item.type];
          console.log(item.type)
        
          return (
            <div className={styles.titleItem} key={item.type} onClick={() => titleClick(item.type)}>
              {/* 选中类名：selected */}
              <span className={[styles.dropdown, isSelected ?styles.selected : ''].join(' ')}>
                <span>{ item.title}</span>
                <i className="iconfont icon-arrow"></i>
              </span>
            </div>
          )
        })
     }
   </div>
  )
}
