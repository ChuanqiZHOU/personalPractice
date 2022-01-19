import { Button } from "antd-mobile";
import React from "react";
import ReactDOM from "react-dom";
import { Navigate } from "react-router-dom";

import { BASE_URL,isAuth, getToken, API, removeToken } from '../../utils'

import styles from './index.module.css'
import { Modal,Toast } from "antd-mobile";
// 默认头像
const DEFAULT_AVATAR = BASE_URL + '/img/profile/avatar.png'
 
export default class MyProfile extends React.Component {
  state = {
    flag: false,
    isLogin: isAuth(),
    userInfo: {
      avatar: '',
      nickname: ''
    }
  }
  onLogin = () => {
    this.setState({
      flag:true
    })
  }

  // 菜单数据

  //退出处理程序
  logout=async() => {
    const result = await Modal.confirm({
                content: '确定退出么？',
              })
    if (result) {
                //调用退出API
      // const res = await API.post('/user/logout', null, {
      //   headers: {
      //              authorization: getToken()
      //            }
      // })
     // 移除本地token
      removeToken();
      this.setState({
        isLogin: false,
        userInfo: {
          avatar: '',
          nickname: ''
        }
      })
     }
      
  }
 
  componentDidMount() {
    this.getUserInfo()
  }
  //获取个人资料信息
  async getUserInfo() {
    if (!this.state.isLogin) {
      //未登录
      return
    }
    //发送请求 
    const res = await API.get('/user', {
      // headers: {
      //   authorization: getToken()
      // }
    })
    // console.log(res)
    if (res.data.status === 200) {
      const { avatar, nickname } = res.data.body;
      this.setState({
        userInfo: {
          avatar,
          nickname
        },
      })
    } else {
      //token 失效 将isLogin设置为false
      this.setState({
        isLogin: false
      })

    }
  }
  render() {
    const {isLogin, userInfo: {avatar, nickname}} = this.state 
    return <div>this is Myprofile
      {this.state.flag && <Navigate to='/login' />}
      {/* 头像 */}
      <div>
        <img src={avatar || DEFAULT_AVATAR} alt="" />
      </div>
      <div>
        <div>{nickname || '游客'}</div>
      {/* 未登录展示 */}
      {isLogin ? <>
        <div><span onClick = {this.logout}>退出</span></div>
        <div>编辑个人资料
          <span>
            <i className='iconfont icon-arrow'></i>
          </span>
        </div>
      </> :
      <Button onClick={this.onLogin}>去登录</Button>
      }
      </div>
    </div>;
  }
} 