const formidable = require('formidable');
const path = require('path');

const { Article } = require('../../model/article');

module.exports = (req, res) => {
//创建表单解析对象
const form = new formidable.IncomingForm();
//设置文件上传路径
form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
//是否保留扩展名
form.keepExtension = true;
//解析表单
    form.parse(req, async(err, fields, files) => {
      //fields 对象形式存储普通参数
      // res.send(fields)
     //res.send(files)
      // files 存储上传的文件
    await Article.create({
    title: fields.title,
      author: fields.author,
    publishDate: fields.publishDate,
      cover: files.cover.filepath.split('public')[1],
    //用字符public进行拆分，选第二个数组元素即为在server的保存路径
    content: fields.content
    })
   
    });
  //插入完毕后，重定向到文章列表页面
  res.redirect('/admin/article');
    
  //res.send("ok");
};
