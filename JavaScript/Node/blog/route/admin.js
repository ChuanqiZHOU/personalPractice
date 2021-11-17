const express = require('express');

const admin = express.Router();



admin.get('/login', require('./admin/loginPage'));

admin.post('/login', require('./admin/login'));
// user list router

admin.get('/user', require('./admin/userPage'));

admin.get('/logout', (req, res) => {

    req.session.destroy(function() {
        res.clearCookie('connect.sid');
        res.redirect('/admin/login');
    })
})

module.exports = admin;