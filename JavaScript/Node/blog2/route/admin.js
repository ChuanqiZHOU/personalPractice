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
    
// 创建用户编辑页面路由
admin.get('/user-edit', require('./admin/user-edit'));

//创建实现用户添加功能的路由
admin.post('/user-edit', require('./admin/user-edit-fn'));

//创建用户信息修改路由
admin.post('/user-modify', require('./admin/user-modify'));

//添加删除用户路由
admin.get('/delete', require('./admin/user-delete'));

//文章列表页面路由
admin.get('/article', require('./admin/article'));

//文章编辑页面的路由
admin.get('/article-edit', require('./admin/article-edit'))

//文章添加功能的路由
admin.post('/article-add',require('./admin/article-add'))

module.exports = { admin }