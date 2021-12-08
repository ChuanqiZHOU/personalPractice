const express = require('express');

const home = express.Router();

//blog前台首页展示页面
home.get('/', require('./home/index'));

//blog前台文章详情页面
home.get('/article', require('./home/article'))

// 创建评论路由
home.post('/comment', require('./home/comment'))
module.exports = { home }