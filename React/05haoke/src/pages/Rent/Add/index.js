import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import { useState, useEffect} from 'react'
import NavHeader from '../../../components/NavHeader'

import { List, Input,Picker} from 'antd-mobile'
//房屋类型
const roomTypeData =[
  [{ label: 'one room', value: 'ROOM|d4a692e4-a177-37fd' },
{ label: '2 rooms', value: 'ROOM|d1a00384-5801-d5cd' },
  { label: '3 rooms', value: 'ROOM|20903ae0-c7bc-f2e2' },
  { label: '4 rooms', value: 'ROOM|ce2a5daa-811d-2f49' },
  {label: '4 rooms+ ', value: 'ROOM|2731c38c-5b19-ff7f'}
]]


//朝向
const orientedData = [
  [
    { label: '东', value: 'ORIEN|141B98bf-1ad0-11e3' },
    { label: '西', value: 'RIEN|103fb3aa-e8b4-de0e '},
    { label: '南', value: 'RIEN|61e99445-e95e-7f37'},
    { label: '北', value: 'RIEN|caa6f80b-b764-c2df' },
    { label: '东南', value: 'RIEN|dfb1b36b-e0d1-0977'},
    { label: '东北', value: 'RIEN|67ac2205-7e0f-c057'},
    { label: '西南', value: 'RIEN|2354e89e-3918-9cef'},
      {label:'西北', value: 'RIEN|80795f1a-e32f-feb9'}
             
  ]
]

//楼层
const floorData = [
  [
    { label: '高楼层', value: 'FLOOR|1' },
    { label: '中楼层', value: 'FLOOR|2' },
    { label: '低楼层', value: 'FLOOR|3' },

  ]
]





export default function Add() {
   //const [community, setCommunity] = useState({ });
  const location = useLocation();
  const navigate = useNavigate();
  const [roomTypeValue, setRoomTypeValue] = useState([]);
  const [orientedValue, setOrientedValue] = useState([]);
  const [price, setPrice] = useState();
  const [visibleRoom, setVisibleRoom] = useState(false);

  const visibleRoomStateTrue = () => {
    return setVisibleRoom(true)
  }

  const visibleRoomStateFalse = () => {
    return setVisibleRoom(false)
  }

  const newRoomTypeValue = (v) => {
    return setRoomTypeValue(v)
  }

  const newOrientedValue = (v) => {
    return setOrientedValue(v)
  }
  
    const { state } = location;

    let initialCommunity = { name: '', id: '' }

    if (state) {
        //有小区数据就存储到状态中
        initialCommunity.name = state.name;
        initialCommunity.id = state.id;
  }
  
  console.log(roomTypeValue)
  //console.log(orientedValue)

  const getValue = (name, value) => {
    set{ name } ({
      value
    })
    console.log(name, value) 
  }
    return (
      <div>
        
          <NavHeader>发布房源</NavHeader>
        
      
        
          <List>
            <a>房源信息</a>
            <List.Item
              onClick={() => navigate('/rent/search')}
              extra={initialCommunity.name || '请输入小区名称'}
            >
              小区名称
            </List.Item>
            <List.Item  extra="￥/月">
              请输入租金/月
              <input
                placeholder="qing"
              value={price}
              onChange= {value=> getValue('price', value)}
              ></input>
            </List.Item>
            <List.Item onClick={() => {}} extra="m2">
              请输入面积<input placeholder="平方米"></input>
            </List.Item>

            <List.Item onClick={visibleRoomStateTrue} extra="请选择">
              户型
            <Picker
              columns={roomTypeData}
              value={roomTypeValue}
              visible={visibleRoom}
              onClose={visibleRoomStateFalse}
              onConfirm={newRoomTypeValue}
            ></Picker>
            </List.Item>
          </List>
          <List>
            <a>房屋标题</a>
            <List.Item>
              <input type="text" placeholder= '请输入标题（整租，小区名 2室 5000元）'/>
            </List.Item>
          </List>
         
          <List>
            <List.Item>
            <textarea name="" id="" cols="30" rows="10" placeholder="请输入房屋描述"></textarea>
            </List.Item>
          </List>
      
     </div> 
    )
   
}