import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'

import { API, BASE_URL } from '../../utils'

import NavHeader from '../../components/NavHeader'
import HouseItem from '../../components/HouseItem'
import NoHouse from '../../components/NoHouse'

import styles from './index.module.css'

const Rent=() => {
    //List 出租房屋列表
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    //获取已发布房源数据列表
    const getHouseList= async() => {
        const res = await API.get('/user/houses')
        console.log(res)
        const { status, body } = res.data;
        if (status === 200) {
            setList({
                list: body
            })
        } else {
            navigate('/login', {state:{from:location}})
        }
    }

    useEffect(() => {
        getHouseList()
    },[])
   

    const renderHouseItem = ()=> {   
        return (
            list.map(item => {
                return (
                    <HouseItem
                        key={item.houseCode}
                        onClick={()=> navigate(`/detail/$(item.houseCode)`)}
                        src={BASE_URL + item.houseImg}
                        title={item.title}
                        desc={item.desc}
                        tags={item.tags}
                        price={item.price}
                    ></HouseItem>
                )
            })
        )
    }

    const renderRentList= () =>{
        const hasHouse = list.length > 0;
        if (!hasHouse) {
            return (
                <NoHouse>
                    没有房源
                    <Link to="/rent/add">
                        去发布房源吧
                    </Link>
                </NoHouse>
            )
        }

        return <div>{renderHouseItem()}</div>
    }

    
     return (
            <div>
                <NavHeader onLeftClick={() => navigate(-1)}>房屋管理</NavHeader>
                {renderRentList()}
            </div>
    )
    

}

export default Rent
