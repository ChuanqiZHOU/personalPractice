import React from "react";
import FilterFooter from '../../../../components/FilterFooter'
import styles from './index.module.css'

import { useState } from "react";


export default function FilterMore({onCancel1,  onSave, data, type, defaultValues }) {
  //console.log(defaultValues);
  const [selectedValues, setSelectedValues] = useState(defaultValues);
  

  const { roomType, oriented, floor, characteristic } = data;
  
  // 每个标签点击事件
  const onTagClick = (value) => {
    //console.log(data)
    //创建一个新数组
    const newSelectedValues = [...selectedValues];
    
    if (selectedValues.indexOf(value) <= -1) {
      // 没有当前项的值
        newSelectedValues.push(value)

    } else {
          //如果下面的item ===data 则返回index to index
      const index = newSelectedValues.findIndex(item => item === value)
      newSelectedValues.splice(index,1)
    }
    setSelectedValues(newSelectedValues);
}

  
 // 渲染标签
  const renderFilters = (params)=> {
    //高亮类名： styles.tagactive
    
    return params.map(item => {
      const isSelected = selectedValues.indexOf(item.value) > -1
      // 此处map要添加key值
      return (<span  key={item.label} className={[styles.tage, isSelected ? styles.tagActive : ' '].join(' ')} onClick={() => onTagClick(item.value)}> {item.label}</span>)
    
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
      {type === 'more' ? (
        <div className={styles.mask} onClick={() => onCancel1(type)}></div>
      ) : null}

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
        onCancel={onCancel}
        onOK={() => onOK()}
        concelText="清除"
      ></FilterFooter>
    </div>
  )
}
