import React, { useState, creatContext, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import {isAuth} from './auth.js'
import {useLocation} from 'react-router-dom'
const RequireAuth = ({ children }) => {
    const location = useLocation();
    const isLogin = isAuth();
    if (isLogin) {
        //登录成功
        return (
            children
        )
    } else {
        //登录不成功
        return (
            <Navigate to='/login' state={{from : location}} replace/>
        )
    }

}

export { RequireAuth }