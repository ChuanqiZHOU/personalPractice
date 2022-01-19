const TOKEN_NAME = 'hkzf_token'

//获取token

const getToken = () => localStorage.getItem(TOKEN_NAME)

//设置token

const setToken = () => localStorage.setItem(TOKEN_NAME)

// 删除token

const removeToken = () => localStorage.removeItem(TOKEN_NAME)

// 是否登录权限 布尔值

const isAuth = () => !!getToken()  

export {getToken, setToken,removeToken,isAuth}