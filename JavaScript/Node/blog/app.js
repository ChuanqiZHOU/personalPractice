//import Express
const express = require('express');

const path = require('path');

const app = express();

// link to database
require('./model/connect');

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