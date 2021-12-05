const {User} = require('../../model/user')
module.exports = async(req, res) => {
    const { message, id } = req.query;
    //如果id为真，则为修改操作
    if (id) {
        // 修改操作
        let user = await User.findOne({ _id: id });
        //渲染用户渲染界面(修改)
        res.render('admin/user-edit', {
            message: message,
            user: user,
            link: '/admin/user-modify?id='+id,
            button: 'modify'
        })
    } else {
        //渲染界面(增加用户)
        res.render("admin/user-edit", {
          message: message,
            link: "/admin/user-edit",
          button: 'add'
        });
    }  
}