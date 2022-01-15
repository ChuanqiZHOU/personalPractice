import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import { useParams } from 'react-router-dom'

import { API } from '../../utils/api'
import { useState } from 'react/cjs/react.development'
const HouseDetail = () => {
 
    const res1 = GetHouseDetail();

    const res2 = res1();
    console.log(res2)
    
//     const res1 = JSON.stringify(res)
//   console.log(res1)
   // const { community } = houseInfo;

    //const [houseInfo, setHouseInfo] = useState(); 
    //console.log(houseInfo)
   
    //console.log(props)
    return (
        <div> this is HouseDetail? </div>
    )
}

const GetHouseDetail= (func) => {
    let { id } = useParams();
    let res_detail = {};
    let houseInfo1 = '';
    useEffect(async() => {
    const res = await API.get(`/houses/${id}`)
        houseInfo1 = JSON.stringify(res.data.body)
        const res_detail = JSON.parse(houseInfo1)
        console.log(houseInfo1)
        console.log(res_detail)
    }, [])
  
    return (
        func = () => {
            return houseInfo1
        }
        
    )  
}

export default HouseDetail