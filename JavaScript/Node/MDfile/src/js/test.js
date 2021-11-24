const fs = require('fs');

const inputFile = '../md/Im-betting-on-SPAs.md';

if (!fs.existsSync(inputFile)) return console.log('file is not existed');

let stats = fs.statSync(inputFile);

if (stats.isDirectory()) return console.log('This is direactory');

if (stats.isFile()) {

    let content_title = "";
    let content_author = "";
    let content_subtitle = "";
    fs.readFile(inputFile, 'utf-8', (err, data) => {

        if (err) {
            console.log('fs reading is wrong')
        } else {
            const a = data.search(/Title/);
            const b = data.search(/Author/);
            content_title = data.substring(a, b).trim();

            const c = data.search(/Slug/);
            content_author = data.substring(b, c).trim();

            const d = data.search(/#/);
            //console.log(d);
            //const e = data.search(/\n{4}/);
            //content_subtitle = data.substring(d, e).trim();
            const e = data.trim().split('\r\n');

            let e_value = e.forEach((value, index) => {
                //const value_str = e[index].toString;
                if (value.indexOf("Title") === 0) {
                    content_title = value;
                }
                //return console.log(value.indexOf("#"));

            })
            console.log(content_title);

            //console.log(e.length);

            //processFile();
            // let htmlStr = marked(data.toString());
            //console.log(htmlStr);
            // fs.writeFile(output, htmlStr, err => {
            //     if (err) {
            //         throw err
            //     } else {
            //console.log('file has been built');

            //     }
            // })
        }
    })

    function processFile() {
        console.log(content_title);
        console.log(content_author);
        console.log(content_subtitle);

    }



}