const template = require('art-template')

// template is to build html file
//template needs absolute path

const path = require('path');

const views = path.join(__dirname, 'views', 'index.art')


const html = template(views, {
    name: 'zhang3',
    age: 20
})

console.log(html);