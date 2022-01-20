import React from "react";
import { useState, useEffect } from 'react'
import {Spring} from 'react-spring/renderprops'

import FilterTitle from "../FilterTitle";
import FilterPicker from "../FilterPicker";
import FilterMore from "../FilterMore";

// 导入自定义的axios
import { API } from "../../../../utils/api";

import styles from './index.module.css'
import { convertStringArrayToDate } from "antd-mobile/es/components/date-picker/date-picker-date-utils";

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
 
export default function Filter(props) {
  const [tss, setTss] = useState(titleSelectStatus)
  const [openType, setOpenType] = useState(' ')
  const [filterData, setFilterData] = useState({})

  // 默认选项值存入 state
  const [sv, setSv] = useState(selectedValues)
  
  // 点击标题菜单
  const onTitleClick = (type) => {
    //遍历titleSelectedStatus
    //Object.keys() => [price,mode,area,more]
    Object.keys(titleSelectStatus).forEach((item) => {
      //key表示数组中的每一项；
      if (item === type) {
        // 当前标题的选中状态
        newTittleSelectedStatus[item] = true
        return
      }
      // 其他标题
      //当item下 已选中的项目值
      const selectedVal = sv[item]
      //console.log(selectedVal);
      if (
        item === 'area' &&
        (selectedVal[1] !== 'null' || selectedVal[0] !== 'area')
      ) {
        //高亮
        newTittleSelectedStatus[item] = true
      } else if (item === 'mode' && selectedVal[0] !== 'null') {
        newTittleSelectedStatus[item] = true
      } else if (item === 'price' && selectedVal[0] !== 'null') {
        newTittleSelectedStatus[item] = true
      } else if (item === 'more' && selectedVal.length !== 0) {
        newTittleSelectedStatus[item] = true
      } else {
        newTittleSelectedStatus[item] = false
      }
    })

    // console.log(newTittleSelectedStatus);
    setTss(newTittleSelectedStatus)
    // setTss({
    //   ...tss,
    //   [type]: true,
    // })
    //通过点击，将当前type设置为openType, 这样当点击的时候，就会显示FilterPicker组件
    setOpenType(type)
  }

  useEffect(() => {
    // let flag = true;
    // if(flag === true) {
    // getFilterData()
    // // console.log(filterData)
    // }
    // return () => {
    //   flag = false
    // }
    getFilterData()
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
    const onCancel = (type) => {
    //菜单高亮逻辑处理
    // 此处没有value值，所以要根据type去sv中找到选中值
    const selectedVal = sv[type]
    //console.log(selectedVal)
    //console.log(selectedVal.length)
    if (
      type === 'area' &&
      (selectedVal[1] !== 'null' || selectedVal[0] !== 'area')
    ) {
      //高亮
      newTittleSelectedStatus[type] = true
    } else if (type === 'mode' && selectedVal[0] !== 'null') {
      newTittleSelectedStatus[type] = true
    } else if (type === 'price' && selectedVal[0] !== 'null') {
      newTittleSelectedStatus[type] = true
    } else if (type === 'more' && selectedVal.length !== 0) {
      newTittleSelectedStatus[type] = true
    } else {
      newTittleSelectedStatus[type] = false
    }

    setOpenType(' ')
    // console.log(type)

    //更新titleSelectedStatus
    setTss(newTittleSelectedStatus)
  }

  // 确定按钮的方法
  const onSave = (type, value) => {
    //菜单高亮逻辑处理
    const selectedVal = value
    //console.log(selectedVal);
    //console.log(selectedVal.length);
    if (
      type === 'area' &&
      (selectedVal[1] !== 'null' || selectedVal[0] !== 'area')
    ) {
      //高亮
      newTittleSelectedStatus[type] = true
    } else if (type === 'mode' && selectedVal[0] !== 'null') {
      newTittleSelectedStatus[type] = true
    } else if (type === 'price' && selectedVal[0] !== 'null') {
      newTittleSelectedStatus[type] = true
    } else if (type === 'more' && selectedVal.length !== 0) {
      newTittleSelectedStatus[type] = true
    } else {
      newTittleSelectedStatus[type] = false
    }
    // 当点击时，将openType设置为空，隐藏对话框
    setOpenType(' ')

    //更新titleSelectedStatus
    setTss(newTittleSelectedStatus)
    //当onSave被点击时候，会将value写入sv，此时，selectedvalues就会赋值给FilterPicker
    setSv({
      ...sv,
      [type]: value,
    })

    const thisTimeout = setTimeout(() => {
      document.querySelector('.appbody').scrollTo(0, 0)
    })

    
  };

  
    
  
    
  

  // 筛选条件数据

  const { area, mode, price, more } = sv
  const filter = {}
  
  // //筛选区域
  // let newArea0 = JSON.stringify(area);
  // let newArea = JSON.parse(newArea0);
  const areaKey = area[0]
  let areaValue = ''  
  if (area[3] !== 'null') {
     areaValue = area[3]
   }
  if (area[3] === 'null' && area[2] !== 'null') {
     areaValue = area[2]
  }
  if (area[2] ==='null') {
    areaValue = area[1];
  }
  filter[areaKey] = areaValue
  
  // // 方式和租金
   filter.mode = mode[0]
  filter.price = price[0]
  
  // // 更多 筛选条件
  filter.more = more.join(',')

  //console.log(filter)
  //console.log(sv)

  // 调用FindHouse中的onFilter方法，将filter数据传到FindHouse
  useEffect(() => {
    props.onFilter(filter)
  },[])
  

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
        onCancel={(type) => onCancel(type)}
        onSave={(type, value) => onSave(type, value)}
        data={data}
        type={openType}
        defaultValues={defaultValues}
      ></FilterPicker>
    )
  }

  //render FilterMore
  const renderFilterMore = () => {
    if (openType !== 'more') {
      return null
    }

    //将数据从filterData中解构出来，并利用data传递给FilterMore组件
    const { roomType, oriented, floor, characteristic } = filterData
    const data = {
      roomType,
      oriented,
      floor,
      characteristic,
    }

    //FilterMore中默认选中值
    const defaultValues = sv.more

    return (
      <FilterMore
        key={openType}
        onCancel1={(type) => onCancel(type)}
        onSave={(type, value) => onSave(type, value)}
        data={data}
        type={openType}
        defaultValues={defaultValues}
      ></FilterMore>
    )
  }

  const renderMask = () => {

    const isHide =
      openType === 'area' || openType === 'mode' || openType === 'price'
    if (!isHide) {
      return null
    } else {
      return (
              <div
                style={props}
                className={styles.mask}
                onClick={() => onCancel(openType)}
              ></div>
            )
    }
    
  }

  return (
    <div className={styles.root}>
      {/*  前三个菜单的遮罩层 */}

      {renderMask()}
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