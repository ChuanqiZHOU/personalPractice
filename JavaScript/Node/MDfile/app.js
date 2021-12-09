const express = require('express');
const app = express();
const path = require('path')
// set express template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
app.engine('art', require('express-art-template'));

const post = require('./route/post');

app.use('/', post);

app.listen(80, console.log('server is running'))