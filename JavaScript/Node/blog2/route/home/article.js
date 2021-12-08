const {Article} = require('../../model/article')
const {Comment} = require('../../model/comment')
module.exports = async(req, res) => {
  //res.send("welcome to page in detail");
    //接收客户端传递过来的id
  const id = req.query.id;
  //res.send(id)
//根据id 查询文章集合的信息
  let article1 = await Article.findOne({ _id: id }).populate('author');
  //查询当前文章所对应的评论信息
  // aid 就是当前文章的id 在地址栏中，可以通过 req.query.id获取
  let comments1 = await Comment.find({ aid: id }).populate('uid');
  
  let article2 = JSON.stringify(article1);
  let article = JSON.parse(article2);

let comments2 = JSON.stringify(comments1);
let comments = JSON.parse(comments2);
  // res.send(comments);
  // return
  res.render('home/article.art', {
    article,
    comments
    })
};