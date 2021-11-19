const express = require('express');
const app = express();

const post = require('./route/post')

app.get('/', post)
app.listen(80, console.log('server is running'))