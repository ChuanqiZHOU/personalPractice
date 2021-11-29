const fs = require('fs');

const { marked } = require('marked');

const mdToHtml = function(input, output) {
    fs.readFile(input, (err, data) => {
        if (err) {
            console.log('fs reading is wrong')
        } else {
            let htmlStr = marked(data.toString());
            let newHtmlStr = "{{extend '../../views/common/layout.art'}}{{block 'main'}}" + htmlStr + "{{block}}";
            //console.log(htmlStr);
            fs.writeFile(output, newHtmlStr, err => {
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