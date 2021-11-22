const { User } = require('../../model/user')

const bcrypt = require('bcrypt')

module.exports = async(req, res, next) => {

    const { username, email, role, state, password } = req.body;
    const id = req.query.id;

    let user = await User.findOne({ _id: id });
    // password compare
    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
        // res.send('password is correct')
        await User.updateOne({ _id: id }, {
            username: username,
            email: email,
            role: role,
            state: state
        });
        //then redirect to user list page

        res.redirect('/admin/user');
    } else {
        let obj = {
            path: '/admin/user-edit',
            message: 'password is not correct',
            id: id
        };
        next(JSON.stringify(obj))
    }

}