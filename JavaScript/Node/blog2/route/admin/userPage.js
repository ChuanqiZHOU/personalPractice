const {User} = require('../../model/user')

module.exports = async(req, res) => {
  //接收客户端传递过来的当前页
  let page = req.query.page || 1;
  //每页显示条数
  let pageSize = 3;
  // 数据总数
  let count = await User.countDocuments({});
// 总页数
  let total = Math.ceil(count / pageSize);
//页码开始的位置
  let start = (page - 1) * pageSize;

  
  //将用户信息从数据库中查询出来
  let users = await User.find({}).limit(pageSize).skip(start);

  res.render("admin/user.art", {
    users: users,
    //msg: req.session.username
    page: page,
    total: total
  });
};