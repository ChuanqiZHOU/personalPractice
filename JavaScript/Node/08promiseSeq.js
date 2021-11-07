const fs = require('fs');

function p1() {
    return new Promise((resolve, reject) => {
        fs.readFile('02a.js', 'utf-8', (err, data) => {

            if (err != null) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

function p2() {
    return new Promise((resolve, reject) => {
        fs.readFile('02b.js', 'utf-8', (err, data) => {

            if (err != null) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

function p3() {
    return new Promise((resolve, reject) => {
        fs.readFile('03fs.js', 'utf-8', (err, data) => {

            if (err != null) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

p1().then((r1) => {
        console.log(r1);
        return p2();
    })
    .then((r2) => {
        console.log(r2);
        return p3();
    })
    .then((r3) => {
        console.log(r3);
    })