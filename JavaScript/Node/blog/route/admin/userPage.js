const { User } = require('../../model/user')

module.exports = async(req, res) => {
    //accept current page 

    let page = req.query.page || 1; // default is 1

    //res.send(page);
    // user list per page
    let pagesize = 2;

    //total user in database
    let countNumber = await User.countDocuments({});

    //total page
    let total = Math.ceil(countNumber / pagesize);
    // page start

    let start = (page - 1) * pagesize;
    // find the total users 
    let users = await User.find({}).limit(pagesize).skip(start);
    //res.send(users);
    res.render('admin/user', {
        users: users,
        page: page,
        total: total
    })
}