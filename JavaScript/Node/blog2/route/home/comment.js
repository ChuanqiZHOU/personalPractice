//引入评论集合构造函数
const {Comment} = require('../../model/comment')

module.exports = async(req, res) => {
//接收客户端传递过来的参数
   // res.send(req.body)
    const { content, aid, uid } = req.body;
// 将评论信息存储到评论集合中
    await Comment.create({
        content: content,
        uid: uid,
        aid: aid,
        time: new Date()
    });
    //重定向回文章详情页面
    res.redirect('/home/article?id='+ aid)
}