const express = require('express');

const admin = express.Router();

//渲染登录页面
admin.get('/login', require('./admin/loginPage'))

// for login in login.art
admin.post('/login', require('./admin/login'));

//creat userlist router
admin.get('/user', require('./admin/userPage'));
    // admin.get('/', (req, res) => {
    //     res.send('welcome to admin page')

// });

admin.get('/logout', require('./admin/logout'));
    
// 创建编辑页面路由
admin.get('/user-edit', require('./admin/user-edit'));

//创建实现用户添加功能的路由
admin.post('/user-edit', require('./admin/user-edit-fn'))
module.exports = { admin }