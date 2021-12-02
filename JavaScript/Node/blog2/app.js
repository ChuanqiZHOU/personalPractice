const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

//import express-session model
const session = require("express-session");


const app = express();

require('./model/connect');
//require('./model/user'); this sentence is only for initiated user, then delete it.

// obtain post request params
app.use(bodyParser.urlencoded({ extended: false }));

// write session
app.use(session({ secret: "secret key" }));

// set express template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
app.engine('art', require('express-art-template'));
// set the static resource path
app.use(express.static(__dirname + '/' + 'public'));


const { home } = require('./route/home');
const { admin } = require('./route/admin');
// 登录拦截
app.use("/admin", require("./middleware/loginguard"));
app.use('/home', home);

app.use('/admin', admin);
app.listen(80, console.log('server is running'));