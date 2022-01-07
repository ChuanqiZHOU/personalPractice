import React from "react";
import FilterFooter from '../../../../components/FilterFooter'
import styles from './index.module.css'

import { useState } from "react";


export default function FilterMore({onCancel1,  onSave, data, type, defaultValues }) {
  const [value, setValue] = useState(defaultValues);
  
  const [selectedValues, setSelectedValues] = useState([]);
  

  const { roomType, oriented, floor, characteristic } = data;
  
  // 每个标签点击事件
  const onTagClick = (data) => {
    console.log(data)
    //创建一个新数组
    const newSelectedValues = [...selectedValues];
    
    if (selectedValues.indexOf(data) <= -1) {
        newSelectedValues.push(data)

    } else {
          //如果下面的item ===data 则返回index to index
      const index = newSelectedValues.findIndex(item => item === data)
      newSelectedValues.splice(index,1)
    }
    setSelectedValues(newSelectedValues)
  
}

 // 渲染标签
  const renderFilters = (data)=> {
    //高亮类名： styles.tagactive
    
    return data.map(item => {
      const isSelected = selectedValues.indexOf(item.value) > -1
      return (<span className={[styles.tage, isSelected ?
        styles.tagActive : ' '].join(' ')} key={item.label} onClick={() => onTagClick(item.value)}> {item.label}</span>)
    
    })
    
  }
  const onCancel = () => {
      setSelectedValues([])
  }

  const onOK = () => {
    // onSave是父组件中的方法s
    onSave(type, selectedValues)
  }
  return (
    <div className={styles.root}>
      {/* 遮罩层 */}
      <div className={styles.mask} onClick = {onCancel1}></div>

      {/* 条件内容 */}
      <div className={styles.tags}>
        <dl className={styles.dl}>
          <dt className={styles.dt}>户型</dt>
          <dd className={styles.dd}>{renderFilters(roomType)}</dd>

          <dt className={styles.dt}>朝向</dt>
          <dd className={styles.dd}>{renderFilters(oriented)}</dd>

          <dt className={styles.dt}>楼层</dt>
          <dd className={styles.dd}>{renderFilters(floor)}</dd>

          <dt className={styles.dt}>房屋亮点</dt>
          <dd className={styles.dd}>{renderFilters(characteristic)}</dd>
        </dl>
      </div>

      {/* 底部按钮 */}
      <FilterFooter
        className={styles.footer}
        onCancel={()=> onCancel()}
        onOK={()=> onOK()}
        concelText="清除"
      ></FilterFooter>
    </div>
  )
}
