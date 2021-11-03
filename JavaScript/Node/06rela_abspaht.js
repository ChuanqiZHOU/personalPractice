const fs = require('fs');

fs.readFile('02a.js', 'utf-8', (err, result) => {

    if (err !== null) {
        console.log(err);
    } else {
        console.log(result);
    }



})