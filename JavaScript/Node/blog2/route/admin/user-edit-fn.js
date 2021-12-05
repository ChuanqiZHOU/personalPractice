
const { User, validateUser} = require('../../model/user')
const bcrypt = require('bcrypt');
const e = require('express');
module.exports = async(req, res, next) => {
    //res.send('ok')
    //res.send(req.body)
   
    try {
      await validateUser(req.body)
    } catch (ex) {
      //console.log(ex.message); //输出自定义错误信息
        //ex.message
        //return res.redirect(`/admin/user-edit?message=${ex.message}`)
    return next(JSON.stringify({ path: "/admin/user-edit", message:ex.message}));
    }

    // search the added user's email
    let user = await User.findOne({ email: req.body.email });
    //res.send(user);
    if (user) {
        //return res.redirect(`/admin/user-edit?message='user has been exsited'`);
    return next(JSON.stringify({ path: "/admin/user-edit", message:'user has been exsited'}));
    }

    

    // bcrypt for the new user
    const salt = await bcrypt.genSalt(10);

    const password = await bcrypt.hash(req.body.password, salt);

    req.body.password = password;
    //res.send(req.body)

    // add new user to database
    await User.create(req.body);
    res.redirect('/admin/user');
}