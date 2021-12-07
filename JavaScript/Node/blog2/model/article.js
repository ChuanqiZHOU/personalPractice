//引入mongoose模块
const mongoose = require('mongoose');
//创建文章集合的规则
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 20,
        minlength: 4,
        required: [true, 'input the title']
    },

    author: {//author is the document in users
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'input the author']
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String
    }
});
//根据规则创建集合
const Article = mongoose.model('Article', articleSchema);

//将集合作为模块导出
module.exports = {Article}