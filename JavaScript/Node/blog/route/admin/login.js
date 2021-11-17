const bcrypt = require('bcrypt');

// import User structure fuction
const { User } = require('../../model/user');


module.exports = async(req, res) => {
    //res.send(req.body); to abtain req params
    const { email, password } = req.body;

    // if no email and password input
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', { msg: 'email and password wrong' });
    }
    // find user information according to email, must use async
    // user params is object or null
    let user = await User.findOne({ email: email });
    if (user) {
        // compare password with crypt mode
        let isValid = await bcrypt.compare(password, user.password);
        if (isValid) {
            //login sucessfull
            req.session.username = user.username;

            req.app.locals.userInfo = user;
            //redirect to user list
            res.redirect('/admin/user');
        } else {
            res.status(400).render('admin/error', { msg: 'user is wrong' });
        }
    } else {
        // user is null
        res.status(400).render('admin/error', { msg: 'user is wrong' });
    }

}