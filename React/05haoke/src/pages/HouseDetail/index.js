import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import { useParams } from 'react-router-dom'

import { API } from '../../utils/api'
import { useState } from 'react/cjs/react.development'
import { BASE_URL } from '../../utils'
import { isAuth } from '../../utils'
import { Modal } from 'antd-mobile/es/components/modal/modal'
import { Navigate, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Toast } from 'antd-mobile'
const HouseDetail = () => {
    const [houseDetail, setHouseDetail] = useState({})
  let { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
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
    
   // console.log(community)
  // 进入页面即检查是否是收藏
  const checkFavorite = async() => {
     // 检查是否已登录
    const isLogin = isAuth();
    if (!isLogin) {
      //没有登录
      return
    }
    //已登录,则拿id
   // console.log(id)
    const res = await API.get(`/user/favorites/${id}`)
    //console.log(res)
    //解构res
    const { status, body } = res.data;
    if (status === 200) {
      //200说明请求已成功，更新isFavorite
      setIsFavorite(body.isFavorite);
    }
   }
    
  useEffect(() => {
    checkFavorite()
  },[])
const GetHouseDetail = async() => {
        const res = await API.get(`/houses/${id}`)
       const houseInfo1 = JSON.stringify(res.data.body)
        const res_detail = JSON.parse(houseInfo1)
       setHouseDetail(res_detail)
}

    //收藏按钮单击事件
  const handleFavorite = async() => {
    const isLogin = isAuth();
    if (!isLogin) {
      // 未登录 弹出提示
      return (
      await Modal.confirm({
        content: '需要登录',
        onConfirm: toLogin
              }))
    }
    // 已登录
    if (isFavorite) {
      //已收藏， 删除收藏
      const res = await API.delete(`/user/favorites/${id}`)
      console.log(res)
      // 只要取消了收藏，则isFavorite 就变为False
     const favoriteChange= await setIsFavorite(false)
      if (res.data.status === 200) {
        //提示用户取消收藏
        Toast.show('已取消收藏')
      } else {
        //Token超时，如400
        Toast.show('登录超时')
      }
    } else {
      //未收藏，添加收藏
      const res = await API.post(`/user/favorites/${id}`)
      console.log(res)
      // 只要收藏，则isFavorite 就变为true
     
       if (res.data.status === 200) {
         //提示用户已收藏
         Toast.show('已收藏')
          const favoriteChange = await setIsFavorite(true)
       } else {
         //Token超时，如400
         Toast.show('登录超时')
       }
    }

  }
const location = useLocation();
  const toLogin = () => {
    navigate('/login', {state:{from:location}})
  }
    
//     const res1 = JSON.stringify(res)
//   console.log(res1)
   // const { community } = houseInfo;

    //const [houseInfo, setHouseInfo] = useState(); 
    //console.log(houseInfo)
   
    //console.log(props)
  return (
      <>
      <div> this is HouseDetail? {community}</div>
      {/* 收藏的图标 */}
      <div onClick = {handleFavorite}>
          <img src={BASE_URL+(isFavorite?'/img/star.png':'/img/unstar.png')} alt="" />
        <span>{ isFavorite? '已收藏':'未收藏'}</span>
      </div>
    </>
    )
}



export default HouseDetail