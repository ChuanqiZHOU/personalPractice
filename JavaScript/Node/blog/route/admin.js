const express = require('express');

const admin = express.Router();

admin.get('/login', (req, res) => {

    res.render('admin/login');

});

// user list router

admin.get('/user', (req, res) => {

    res.render('admin/user')
})

module.exports = admin;