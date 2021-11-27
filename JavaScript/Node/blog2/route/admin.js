const express = require('express');

const admin = express.Router();

const { User } = require('../model/user')


admin.get('/login', (req, res) => {
    res.render('admin/login.art')
})

// for login in login.art
admin.post('/login', async(req, res) => {
    const { email, password } = req.body;
    if (email.trim().length == 0 || password.trim().length == 0) {
        // return res.status(400).send('email or password is wrong')
        return res.status(400).render('admin/error', {
            msg: 'email or password is wrong'
        })
    }
    // to check user information in database
    let user = await User.findOne({ email });
    if (user) {
        // password comparing
        if (password == user.password) {
            res.send('login sucessful')
        } else {
            res.status(400).render('admin/error', { msg: 'email or password is error' })
        }
    } else {
        res.status(400).render('admin/error', { msg: 'email or password is error' })
    }
});

admin.get('/user', (req, res) => {
        res.render('admin/user.art')
    })
    // admin.get('/', (req, res) => {
    //     res.send('welcome to admin page')

// });
module.exports = { admin }