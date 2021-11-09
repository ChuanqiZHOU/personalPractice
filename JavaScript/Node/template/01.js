const template = require('art-template')

// template is to build html file
//template needs absolute path

const path = require('path');

const views = path.join(__dirname, 'views', '01.art')


const html = template(views, {
    users: [{
            name: 'zhang3',
            age: 17,
            content: "<h1>hello world </h1>"
        }, {
            name: 'zhang4',
            age: 17,
            content: "<h1>hello world </h1>"
        }, {
            name: 'zhang34',
            age: 17,
            content: "<h1>hello world </h1>"
        }

    ]
})

console.log(html);