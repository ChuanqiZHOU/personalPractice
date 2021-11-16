//import Express
const express = require('express');

const path = require('path');
// import body-parser to analysis the post params

const bodyParser = require('body-parser');
// import express-session model

const session = require('express-session');

const app = express();

// link to database
require('./model/connect');

// analysis post params

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({ secret: 'secret key' }));

// link to user collection to test User.create() function
//require('./model/user');

//the position of template
app.set('views', path.join(__dirname, 'views'));

// the file style of template

app.set('view engine', 'art');

// which template is used?
app.engine('art', require('express-art-template'));

const home = require('./route/home');

const admin = require('./route/admin');


// open the static sources
app.use(express.static(path.join(__dirname, 'public')));

app.use('/home', home);

app.use('/admin', admin);



app.listen(80);
console.log('server is running')