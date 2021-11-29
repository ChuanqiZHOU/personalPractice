const { mdToHtml } = require('./mdToHtml');

// mdToHtml('../Im-betting-on-SPAs.md', '../Im-betting-on-SPAs.html');

const fs = require('fs');
const path = require('path');

const fileRename = (inputDir, outputDir) => {
    const files = fs.readdirSync(inputDir);

    return files.forEach((value, index) => {
        let fpath = path.join(inputDir, value);
        let stats = fs.statSync(fpath);
        let outputFileName = "";
        // console.log(value);
        if (stats.isDirectory()) {
            return;
        }
        if (stats.isFile()) {
            outputFileName = outputDir + '/' + value.slice(0, -2) + 'art';
            // console.log(outputFileName);
        }
        mdToHtml(fpath, outputFileName);
    })


}

module.exports = { fileRename }