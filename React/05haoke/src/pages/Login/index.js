import React from 'react'
import styles from './index.module.css'
import NavHeader from '../../components/NavHeader'
import { useState } from 'react/cjs/react.development'
import { useNavigate, useLocation} from 'react-router-dom'
import { API } from '../../utils'
import axios from 'axios'
import { Toast } from 'antd-mobile'
import { Navigate } from 'react-router-dom'
import { withFormik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
function Login(props) {
    //const [userName, setUserName] = useState('');
    // const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
    // const getUserName = (e) => {
    //     setUserName( e.target.value )
    //     //console.log(e.target.value)
    // }
    // const getPassword = (e) => {
    //     setPassword(e.target.value)
    // }

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     const res = await API.post('/user/login', {
    //         'username': userName,
    //         'password':password
    //     })
    //     const { status, description, body } = res.data;
    //     if (status === 200) {
    //         localStorage.setItem('hkzf_token', body.token)
    //         navigate(-1)
    //     } else {
    //         Toast.show(description)
    //     }
    // }
    //通过props接收来自高阶组件withFormik的参数
    const { values, handleSubmit, handleChange, errors,touched,handleBlur } = props
  //console.log(errors, touched)
  //console.log(location)
  const from = location.state?.from?.pathname;
  
    return (
      <div>
        <NavHeader>账号登录</NavHeader>
        {/* {values.status === 200 && <renderNavi></renderNavi>} */}
        { values.status === 200 && (
      (!from) ?
        <Navigate to={-1}></Navigate>
      :
      <Navigate to={from} replace></Navigate>)
    }
        <Form>
          {/* <form onSubmit={handleSubmit}> */}
          {/* <input
            type="text"
            value={values.userName}
            name="username"
            placeholder="请输入账号"
            onChange={handleChange}
            onBlur={handleBlur}
          /> */}
          <Field type="text" name="username" placeholder="请输入账号"></Field>
          {/* {errors.username && touched.username && <div>{errors.username}</div>} */}
          <ErrorMessage component="div" name="username"></ErrorMessage>
          {/* <input
            type="password"
            value={values.password}
            name="password"
            placeholder="请输入密码"
            onChange={handleChange}
            onBlur={handleBlur}
          /> */}
          <Field
            type="password"
            name="password"
            placeholder="请输入密码"
          ></Field>
          {/* {errors.password && touched.password && <div>{errors.password}</div>} */}
          <ErrorMessage component="div" name="password"></ErrorMessage>
          <button type="submit">Submit</button>
          {/* </form> */}
        </Form>
      </div>
    )
}

// 验证规则：
const REG_USERNAME = /^[a-zA-Z_\d]{4,8}$/
const REG_PWD = /^[a-zA-Z_\d]{5,12}$/
// 使用withFormik包裹Login
Login = withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  //添加表单校验规则：
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required('required')
      .matches(REG_USERNAME, 'long for 5-8'),
    password: Yup.string()
      .required('required')
      .matches(REG_PWD, 'password number, letter and 5-12'),
  }),
  //表单提交事件
  handleSubmit: async (values) => {
    //console.log('formik', values)
    // const navigate = useNavigate()
    const { username, password } = values
    const res = await API.post('/user/login', {
      username: username,
      password: password,
    })
    const { status, description, body } = res.data;
  
    if (status === 200) {
      localStorage.setItem('hkzf_token', body.token)
      values.status = 200
      // console.log('sucess')
    } else {
      Toast.show(description)
    }
  },
})(Login)

export default Login