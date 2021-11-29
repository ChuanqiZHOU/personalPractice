const { fileRename } = require('./fileRename');



const fs = require('fs');

fileRename('./src/md', './src/html');
// 获取文件列表
const files = fs.readdirSync('./src/html');
//输出文件名
let fileList = [];
files.forEach((value, index) => {
fileList.push(value.slice(0, -4));
   //console.log(newValue)
    return fileList;
    // fs.readFile(`../html/${value}`, 'utf-8', (err, data) => {
    //     console.log(data);

    // })
    
});

//console.log(fileList)

module.exports = {fileList}