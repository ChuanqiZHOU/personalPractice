//import http
const http = require('http');

// import router
const getRouter = require('router');

//import mongoose
require('./model/conect.js');

// import student model from user.js
const Student = require('./model/user.js');

// import art-template
const template = require('art-template');

const path = require('path');

// import the method to analysis post method
const queryString = require('querystring');

// import static resource access
const serveStatic = require('serve-static');

// obtain object of getRouter
const router = getRouter();

// build the static resource access

const serve = serveStatic(path.join(__dirname, 'public'));
// set the template root directory
template.defaults.root = path.join(__dirname, 'views');

// send student's personal information
router.get('/add', (req, res) => {
    let html = template('index.art', {});
    res.end(html);
})

// send student list
router.get('/list', (req, res) => {
    let html = template('list.art', {});
    res.end(html);

    //res.end('index')
})

// build router for post request from '/add'
router.post('/add', (req, res) => {
    let formdata = '';
    req.on('data', para => {
        formdata += para;
    })

    req.on('end', async() => {
        //let studentItem = queryString.parse(formdata);
        // save adding student information to database
        await Student.create(queryString.parse(formdata));
        // redirect for this page
        res.writeHead(301, {
                Location: '/list'
            }),
            res.end();
    })

})



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