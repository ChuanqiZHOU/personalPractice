// import router
const getRouter = require('router');
//import getRouter from 'router';

// obtain object of getRouter
const router = getRouter();

const Student = require('../model/user.js');
//const Student =
//import ('./model/user.js');

// import art-template
const template = require('art-template');
//import template from 'art-template';

// import the method to analysis post method
const queryString = require('querystring');
//import queryString from 'querystring';

// send student's personal information
router.get('/add', (req, res) => {
    let html = template('index.art', {});
    res.end(html);
})

// send student list
router.get('/list', async(req, res) => {

    // obtain student information from Student collection
    let students = await Student.find();
    console.log(students);
    let html = template('list.art', {
        students: students
    });
    res.end(html);

    //res.end('index')
})

// build router for post request from '/add'
router.post('/add', (req, res) => {
    let formdata = '';
    req.on('data', para => {
        formdata += para;
    });

    req.on('end', async() => {
        let studentItem = queryString.parse(formdata);

        // save adding student information to database
        await Student.create(studentItem);

        // redirect for this page
        res.writeHead(301, {
                Location: '/list'
            }),
            res.end();
    })

})

module.exports = router