const { User } = require('../../model/user');
const bcrypt = require('bcrypt');
const userEdit = require('./user-edit');
module.exports = async(req, res, next) => {
  //res.send('ok') 实现修改功能
  const {username, email, role, state, password} = req.body;
  const id = req.query.id;
// 根据id 查找用户
  let user = await User.findOne({ _id: id });

  // 获取req.body中的密码并进行比对；
  let isValid = await bcrypt.compare(password, user.password);
    // 返回的是boolean
    if(isValid) {
//密码比对成功
      await User.updateOne({ _id: id }, {
        username: username,
        email: email,
        role: role,
        __v: state
      });

  // 重定向
      res.redirect('/admin/user');
      
    } else {
     //密码比对失败
      let obj = { path: '/admin/user-edit', message: 'password alignment is not correct', id: id };
      next(JSON.stringify(obj))
    }

}