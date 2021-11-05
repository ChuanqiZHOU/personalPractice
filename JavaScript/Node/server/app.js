// to build http server
const http = require('http');
const url = require('url');



const app = http.createServer();
// a request from terminal
app.on('request', (req, res) => {
    //req.header
    //console.log(req.headers['accept']);

    // response the statuscode
    //res.writeHead(200);

    // response the content type

    res.writeHead(200, {
        'content-type': 'text/html, charset = utf-8' // html is parsed
    });

    //req.url
    // console.log(req.url);

    // parse the req.ul to object
    // let params = url.parse(req.url, true).query;
    // console.log(params['name']);
    // console.log(params['age']);
    let { query, pathname } = url.parse(req.url, true);
    console.log(query.name);
    console.log(query.age);

    if (pathname == '/index' || req.url == '/') {
        res.end('<h2>welcom to homepage</h2>')
    } else if (pathname == '/list') {
        res.end('welcome to listpage');
    } else {
        res.end('not found');
    }


    //req.method
    console.log(req.method);
    if (req.method == 'POST') {
        res.end('post');
    } else if (req.method == 'GET') {
        res.end('get');
    }
    //res.end('<h2>hello user</h2>');

    //res.writeHead



});

const port = 3000;
app.listen(port, () => {
    console.log('web server has been initiated');
});