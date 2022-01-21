import React, { useState}from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { SearchBar } from 'antd-mobile'

import { getCity, API } from '../../../utils'

import styles from './index.module.css'
import { useEffect } from 'react/cjs/react.production.min'

export default function Search() {
    //当前城市id
    const cityId = getCity().value;
     const location = useLocation();
    const navigate = useNavigate();
    //设定搜索的值
    const [searchText, setSearchText] = useState('');

    const [tipsList, setTipsList] = useState([]);

    //搜索列表每个item的点击事件
    const onTipsClick = (item) => {
                //console.log(item)
        // console.log(location)
        navigate('/rent/add', {
            state: {
                name: item.communityName,
                id: item.community
            },
            replace:true
        })
    }
    
    //渲染搜索列表
    const renderTips = () => {
        return (
            tipsList.map(item => (
                <li key={item.community} onClick={()=> onTipsClick(item)}>
                    {item.communityName}
                    </li>
                ))
            )
    }

   
    
    const handleSearchText = (value) => {
        setSearchText(value)
        console.log(value)
        if (!value) {
            //如果搜索框为空，清空tipsList
            return setTipsList([])
        }
        //如果不为空，发送API获取小区数据
        
        setTimeout(async () => {
           const res = await API.get('/area/community', {
             params: {
               name: value,
               id: cityId,
             },
           })
            console.log(res)
            setTipsList(res.data.body)
            }, 1000); 
    }
    return (
        <div>
            <SearchBar
                placeholder='请输入小区或地址'
                value={searchText}
                showCancelButton={true}
                onCancel={() => navigate(-1)}
                onChange={handleSearchText}
            ></SearchBar>
            {renderTips()}
        </div>
    )
}