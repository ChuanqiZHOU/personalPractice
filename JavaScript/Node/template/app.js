const template = require('art-template')

// template is to build html file
//template needs absolute path

const path = require('path');

const views = path.join(__dirname, 'views', 'index.art')


const html = template(views, {
    name: 'zhang3',
    age: 17,
    content: "<h1>hello world </h1>"
})

console.log(html);