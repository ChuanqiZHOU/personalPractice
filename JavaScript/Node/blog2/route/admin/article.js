const { Article } = require('../../model/article');
const pagination = require('mongoose-sex-page');
const mongooseSexPage = require('mongoose-sex-page');
module.exports = async(req, res) => {
  // 标识 当前访问的是文章管理页面
  req.app.locals.currentLink = "article";
//接收来自地址栏的page信息
  const page = req.query.page;

  // 查询你文章所有数据,d多集合联合查询
  // 此处要加lean();否则报错
  // page当前页，size每页数量，display几个分页符
  //exec 向数据库中发送查询请求
  let articles = await pagination(Article).find({}).page(page).size(2).display(3).populate('author').exec();

  let str = JSON.stringify(articles);
  let json = JSON.parse(str);
  //res.send(json)
  res.render('./admin/article.art', {
    json
  });
}