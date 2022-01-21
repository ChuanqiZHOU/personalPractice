import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import NavHeader from '../../../components/NavHeader'

import { List, Input,Picker} from 'antd-mobile'
//房屋类型



//朝向

//楼层






export default function Add() {
   //const [community, setCommunity] = useState({ });
  const location = useLocation();
  const navigate = useNavigate();
    console.log(location)
    const { state } = location;

    let initialCommunity = { name: '', id: '' }

    if (state) {
        //有小区数据就存储到状态中
        initialCommunity.name = state.name;
        initialCommunity.id = state.id;
    }
    return (
      <div>
        <>
          <NavHeader>发布房源</NavHeader>
        </>
        {/* 房源信息 */}
        <>
          <List header="房源信息">
            <List.Item
              onClick={() => navigate('/rent/search')}
              extra={initialCommunity.name || '请输入小区名称'}
            >
              小区名称
            </List.Item>
            <List.Item onClick={() => {}} extra="￥/月">
              请输入租金/月<input placeholder="qing"></input>
            </List.Item>
            <List.Item onClick={() => {}} extra="m2">
              请输入面积<input placeholder="平方米"></input>
            </List.Item>
            {/* <Picker>
              户型
            </Picker> */}
          </List>
          {/* 房屋标题 */}
          <List title="房屋标题"></List>
          <List header="基础用法">
            <List.Item>1</List.Item>
            <List.Item>2</List.Item>
            <List.Item>3</List.Item>
          </List>
        </>
        {/* 房屋图像 */}

        {/* 房屋配置 */}

        {/* 房屋描述 */}
      </div>
    )
   
}