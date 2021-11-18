const { User, validateUser } = require('../../model/user');

const bcrypt = require('bcrypt');



module.exports = async(req, res, next) => {

    //async function run() {
    try {
        await validateUser(req.body);
    } catch (e) {
        // console.log(e.message);

        // res.redirect('/admin/user-edit?message=' + e.message)
        // return res.redirect(`/admin/user-edit?message=${e.message}`);
        //JSON.stringify() transfer object to string

        const jString = JSON.stringify({ path: '/admin/user-edit', message: e.message });
        return next(jString)
    }


    let user = await User.findOne({ email: req.body.email });
    if (user) {
        // return res.redirect(`/admin/user-edit?message=email has been existed`)

        return next(JSON.stringify({ path: '/admin/user-edit', message: 'email has been existed' }))
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    req.body.password = password;
    //res.send(req.body);

    await User.create(req.body);

    res.redirect('/admin/user');

}