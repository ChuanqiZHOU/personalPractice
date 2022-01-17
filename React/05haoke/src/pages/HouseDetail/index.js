import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import { useParams } from 'react-router-dom'

import { API } from '../../utils/api'
import { useState } from 'react/cjs/react.development'
const HouseDetail = () => {
    const [houseDetail, setHouseDetail] = useState({})
     let { id } = useParams();
    useEffect(() => {
      let flag = true
      if (flag === true) {
        GetHouseDetail()
      }
      return () => {
        flag = false
      }
      
    }, [])
    
    const { community } = houseDetail;
    
    console.log(community)
   
    
const GetHouseDetail = async() => {
        const res = await API.get(`/houses/${id}`)
       const houseInfo1 = JSON.stringify(res.data.body)
        const res_detail = JSON.parse(houseInfo1)
       setHouseDetail(res_detail)
}

    
    
//     const res1 = JSON.stringify(res)
//   console.log(res1)
   // const { community } = houseInfo;

    //const [houseInfo, setHouseInfo] = useState(); 
    //console.log(houseInfo)
   
    //console.log(props)
    return (
        <div> this is HouseDetail? {community}</div>
    )
}



export default HouseDetail