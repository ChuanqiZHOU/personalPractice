const fs = require('fs');

const { marked } = require('marked');

const mdToHtml = function(input, output) {
    fs.readFile(input, (err, data) => {
        if (err) {
            console.log('fs reading is wrong')
        } else {
            let htmlStr = marked(data.toString());
            //console.log(htmlStr);
            fs.writeFile(output, htmlStr, err => {
                if (err) {
                    throw err
                } else {
                    //console.log('file has been built');

                }
            })
        }
    })
}
module.exports = { mdToHtml };