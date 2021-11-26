const express = require('express');

const admin = express.Router();

admin.get('/login', (req, res) => {
    res.render('admin/login.art')
})

// for login in login.art
admin.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email.trim().length == 0 || password.trim().length == 0) {
        // return res.status(400).send('email or password is wrong')
        return res.status(400).render('admin/error', {
            msg: 'email or password is wrong'
        })
    }

});

admin.get('/user', (req, res) => {
        res.render('admin/user.art')
    })
    // admin.get('/', (req, res) => {
    //     res.send('welcome to admin page')

// });
module.exports = { admin }