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
const titleSelectStatus = {area:false, mode: false, price: false, more: false};
  
export default function Filter() {
  const [tss, setTss] = useState(titleSelectStatus)
  const [openType, setOpenType] = useState(' ')
  const [filterData, setFilterData] = useState({})
  // 点击标题菜单
  const onTitleClick = (type) => {
    setTss({
      ...tss,
      [type]: true,
    })
    setOpenType(type)
  }
  //console.log(tss)

  useEffect(() => {
    getFilterData()
    // console.log(filterData)
  })

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

  // 标题高亮状态
  const titleSelectedStatus = {
    area: false,
    mode: false,
    price: false,
    more: false
  }
  // 设置FilterPicker和FilterMore默认筛选条件选中值
  const selectedValues = {
    area: ['area', 'null'],
    mode: ['null'],
    price: ['null'],
    more: [],
  }

  // 默认选项值存入 state
  const [sv, setSv] = useState({ selectedValues })

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
        key= {openType}
        onCancel={() => onCancel()}
        onSave={(type, value) => onSave(type, value)}
        data={data}
        type={openType}
        defaultValues={defaultValues}
      ></FilterPicker>
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
        {/* 最后一个菜单对应的内容
                <FilterMore></FilterMore>
                 */}
      </div>
    </div>
  )
}