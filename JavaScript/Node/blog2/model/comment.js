const mongoose = require('mongoose');
//创建集合规则
const commentSchema = new mongoose.Schema({
  // artical id
  aid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
  },
  //user id
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    },
  // publishDate
    time: {
      type: Date
    },
    //评论内容
    content: {
        type: String
    }
});
// 创建评论集合
const Comment = mongoose.model('Comment', commentSchema);

module.exports = {
    Comment
}