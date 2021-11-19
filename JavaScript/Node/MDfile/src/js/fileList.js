const { fileRename } = require('./fileRename');



const fs = require('fs');

fileRename('../md', '../html');

const files = fs.readdirSync('../html');

files.forEach((value, index) => {
    console.log(value);
    fs.readFile(`../html/${value}`, 'utf-8', (err, data) => {
        console.log(data);

    })
});