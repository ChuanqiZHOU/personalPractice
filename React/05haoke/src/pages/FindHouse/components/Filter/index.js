import React from "react";
import {useState, useEffect}from 'react'

import FilterTitle from "../FilterTitle";
import FilterPicker from "../FilterPicker";
import FilterMore from "../FilterMore";

// 导入自定义的axios
import { API } from "../../../../utils/api";

import styles from './index.module.css'

//标题高亮状态
//true 高亮， false 不高亮
const titleSelectStatus = { area: false, mode: false, price: false, more: false };

// 创建newTittleSelectedStatus
const newTittleSelectedStatus = { ...titleSelectStatus }
  
// 设置FilterPicker和FilterMore默认筛选条件选中值
  const selectedValues = {
    area: ['area', 'null'],
    mode: ['null'],
    price: ['null'],
    more: [],
}
 
export default function Filter() {
  const [tss, setTss] = useState(titleSelectStatus)
  const [openType, setOpenType] = useState(' ')
  const [filterData, setFilterData] = useState({})
  
  // 默认选项值存入 state
  const [sv, setSv] = useState({ selectedValues })

  // 点击标题菜单
  const onTitleClick = (type) => {
    
    //遍历titleSelectedStatus
    //Object.keys() => [price,mode,area,more]
    Object.keys(titleSelectStatus).forEach(item => {
      //当item下 已选中的项目值
      const selectedVal = selectedValues[item];
      //key表示数组中的每一项；
      if (item === type) {
        newTittleSelectedStatus[item] = true
      } else if (
        item === 'area' &&
        (selectedVal.length !== 2 || selectedVal[0] !== 'area')
      ) {
        //高亮
        newTittleSelectedStatus[item] = true
      } else if (item === 'mode' && selectedVal[0] !== 'null') {
        newTittleSelectedStatus[item] = true
      } else if (item === 'price' && selectedVal[0] !== 'null') {
        newTittleSelectedStatus[item] = true
      } else {
         newTittleSelectedStatus[item] = false
      }
    })

    //console.log(newTittleSelectedStatus);
    setTss(newTittleSelectedStatus);
    // setTss({
    //   ...tss,
    //   [type]: true,
    // })
    setOpenType(type)
  }
 

  useEffect(() => {
    let flag = true;
    if(flag === true) {
    getFilterData()
    // console.log(filterData)
    }
    return () => {
      flag = false
    }
  }, [])



  // 封装获取所有筛选方法

  const getFilterData = async () => {
    //
    const { value } = JSON.parse(localStorage.getItem('hkzf_city'))

    const res = await API.get(`/houses/condition?id=${value}`)

    // 将数据存入filterData
    setFilterData(res.data.body)
  }

  // 取消按钮的方法
  const onCancel = () => {
    setOpenType(' ')
  }

  // 确定按钮的方法
  const onSave = (type, value) => {
    console.log(type, value)
    setOpenType(' ')
    // 更新sv
    setSv({
      ...sv,
      [type]: value,
    })
  }

  // // 标题高亮状态
  // const titleSelectedStatus = {
  //   area: false,
  //   mode: false,
  //   price: false,
  //   more: false
  // }

  

  // 渲染FilterPicker的方法
  const renderFilterPicker = () => {
    if (openType !== 'area' && openType !== 'mode' && openType !== 'price') {
      return null
    }
    //拿到当前openType的默认筛选选项
    let defaultValues = sv[openType]

    //根据opentype拿到当前筛选数据
    let data = []
    const { area, subway, rentType, price } = filterData

    switch (openType) {
      case 'area':
        // 获取区域数据
        data = [area, subway]
        break
      case 'mode':
        data = rentType
        break
      case 'price':
        data = price
        break
      default:
        break
    }

    return (
      <FilterPicker
        key={openType}
        onCancel={() => onCancel()}
        onSave={(type, value) => onSave(type, value)}
        data={data}
        type={openType}
        defaultValues={defaultValues}
      ></FilterPicker>
    )
  }

  //render FilterMore
  const renderFilterMore = () => {
          //将数据从filterData中解构出来，并利用data传递给FilterMore组件
    const { roomType, oriented, floor, characteristic } = filterData;
    const data = {
      roomType,
      oriented,
      floor,
      characteristic,
    }
    
    if (openType !== 'more') {
      return null
    }

    //FilterMore中默认选中值
    const defaultValues = sv.more;
    
    return (
      <FilterMore
        key={openType}
        onCancel1={() => onCancel()}
        onSave={(type, value) => onSave(type, value)}
        data={data}
        type={openType}
        defaultValues={defaultValues}
      ></FilterMore>
    )
  }




  return (
    <div className={styles.root}>
      {/*  前三个菜单的遮罩层 */}

      {openType === 'area' || openType === 'mode' || openType === 'price' ? (
        <div className={styles.mask} onClick={() => onCancel()}></div>
      ) : null}

      <div className={styles.content}>
        {/* 标题栏 */}
        <FilterTitle tss={tss} titleClick={(type) => onTitleClick(type)} />

        {/* 前三个菜单对应的内容 */}
        {renderFilterPicker()}

        {/* 最后一个菜单对应的内容*/}
        {renderFilterMore()}
                 
      </div>
    </div>
  )
}