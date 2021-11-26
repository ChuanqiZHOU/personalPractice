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
// write session and give a crypt key
app.use(session({ secret: 'secret key' }));

// link to user collection to test User.create() function
//require('./model/user');

//the position of template
app.set('views', path.join(__dirname, 'views'));

// the file style of template

app.set('view engine', 'art');

// which template is used?
app.engine('art', require('express-art-template'));

// open the static resource
app.use(express.static(path.join(__dirname, 'public')));


// import router model
const home = require('./route/home');

const admin = require('./route/admin');

// obtain the user's login state
app.use('/admin', require('./middleware/loginGuard'))

app.use('/home', home);

app.use('/admin', admin);

// error middleware
app.use((err, req, res, next) => {
    // string to object using JSON.parse()
    const result = JSON.parse(err);
    let params = [];
    for (let attr in result) {
        if (attr != path) {
            params.push(attr + '=' + result[attr]);
        }

    }

    res.redirect(`${result.path}?${params.join('&')}`);
    //res.redirect(`${result.path}?message=${result.message}`);
})



app.listen(80);
console.log('server is running')