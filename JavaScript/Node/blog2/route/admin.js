const express = require('express');

const admin = express.Router();

const { User } = require('../model/user');

const bcrypt = require('bcrypt');
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
        let isEqual = await bcrypt.compare(password, user.password);
        // if (password == user.password) {
        if (isEqual) {
            req.session.username = user.username;
            //res.send("login sucessful");
            req.app.locals.userInfo = user;
            // 登录成功后，重定向到userlist
            res.redirect('/admin/user')
        } else {
          res
            .status(400)
            .render("admin/error", { msg: "email or password is error" });
        }
    } else {
        res.status(400).render('admin/error', { msg: 'email or password is error' })
    }
});

//creat userlist router
admin.get('/user', (req, res) => {
    res.render('admin/user.art', {
            //msg: req.session.username
        
        })
    })
    // admin.get('/', (req, res) => {
    //     res.send('welcome to admin page')

// });

// admin.get('/logout', (req, res) => {
    
// })
module.exports = { admin }