const fs = require('fs')
const promisify = require('util').promisify;

const readFile = promisify(fs.readFile);

async function run() {
    let r1 = await readFile('02a.js', 'utf-8');
    let r2 = await readFile('02b.js', 'utf-8');
    let r3 = await readFile('03fs.js', 'utf-8');
    console.log(r1);
    console.log(r2);
    console.log(r3);

}

run();