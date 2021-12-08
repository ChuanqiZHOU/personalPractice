const { Article } = require('../../model/article');
const pagination = require('mongoose-sex-page')
module.exports = async(req, res) => {
  //res.send("welcome to home page");
  const page = req.query.page;
   //req.app.locals.currentLink = page;
  //从数据库中查询数据
  let result1= await pagination(Article).page(page).size(4).display(2).find({}).populate('author').exec();
  // res.send(result);
  // return
  let result2 = JSON.stringify(result1);
  let result = JSON.parse(result2);
  // res.send(result);
  //  return;
  // 向首页地址渲染数据
  //res.render('home/article.art')
  res.render('home/default.art', {
      result
  })
    
};