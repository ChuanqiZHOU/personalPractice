
const guard = (req, res, next) => {
  // 判断用户访问的是否为登录页面

  //判断用户的登录状态

  //登录用户，放行

  //非登录用户，重定向到登录页面

  if (req.url != "/login" && !req.session.username) {
    res.redirect("/admin/login");
  } else {
    next();
  }
};

module.exports = guard
