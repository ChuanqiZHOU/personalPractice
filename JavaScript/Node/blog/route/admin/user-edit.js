const { User } = require('../../model/user');
module.exports = async(req, res) => {
    // obtain id para

    const { message, id } = req.query;
    // if the id is transfer
    if (id) {
        // modify action
        let user = await User.findOne({ _id: id });
        // invoke user edit page
        res.render('admin/user-edit', {
            message: message,
            user: user
        })
    } else {
        //add action
        res.render('admin/user-edit', {
            message: message
        })
    }


}