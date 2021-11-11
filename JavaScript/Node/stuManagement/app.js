//import http
const http = require('http');
//import http from 'http';


//import mongoose
require('./model/conect.js');
//import ('./model/conect.js');

// import art-template
const template = require('art-template');
//import template from 'art-template';

const path = require('path');
//import path from 'path';
//const __dirname = path.resolve();


// import static resource access
const serveStatic = require('serve-static');
//import serveStatic from 'serve-static';

// import dataformat to formate enterDate of Student information
const dateFormat = require('dateformat');

// import router part 

const router = require('./route/index.js');

// build the static resource access
const serve = serveStatic(path.join(__dirname, 'public'));

// set the template root directory
template.defaults.root = path.join(__dirname, 'views');

template.defaults.imports.dateFormat = dateFormat;

//build http server
const app = http.createServer();

app.on('request', function(req, res) {
    router(req, res, () => {
        // console.log('111')
    });
    //res.end(' I am http')
    serve(req, res, () => {})
}).listen(80, function() {
    console.log("http server is running")
})