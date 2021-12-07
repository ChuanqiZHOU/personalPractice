const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

//import express-session model
const session = require("express-session");

//导入 art-template
const template = require('art-template');

// 导入dateformat
const dateformat = require('dateformat');

// 导入morgan
const morgan = require('morgan');

// 导入config
const config = require('config');

const app = express();

require('./model/connect');
//require('./model/user'); this sentence is only for initiated user, then delete it.

// obtain post request params, then can use req.body to 
// store the post request params
app.use(bodyParser.urlencoded({ extended: false }));

// write session
app.use(session({
    secret: "secret key",
    saveUninitialized: false,//没有登录，不保存cookies
    cookie: {
        maxAge:24*60*60*1000
    }
}));

// set express template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
app.engine('art', require('express-art-template'));
//向模板中引入变量，模板可以直接调用
template.defaults.imports.dateformat = dateformat;
// set the static resource path
app.use(express.static(__dirname + '/' + 'public'));

console.log(config.get('title'));
// 获取系统变量 NODE_ENV
//console.log(process.env);
if (process.env.NODE_ENV == 'development') {

    console.log('env is development')
//在开发环境中，将客户端的请求信息打印到控制台
    app.use(morgan('dev'))
} else {
    console.log('env is production')
};

const { home } = require('./route/home');
const { admin } = require('./route/admin');
// 登录拦截
app.use("/admin", require("./middleware/loginguard"));
app.use('/home', home);

app.use('/admin', admin);

//错误处理中间件
app.use((err, req, res, next) => {
    const result = JSON.parse(err);
    let params = [];
    for (let attr in result) {
        if (attr != 'path') {
            params.push(attr + '=' + result[attr]);  // message = 字符串

        }
    }
 return res.redirect(`${result.path}?${params.join('&')}`);

})

app.listen(80, console.log('server is running'));