const http = require('http');
const url = require('url');
const app = http.createServer();

app.on('request', (req, res) => {

    const method = req.method.toLowerCase();

    const pathname = url.parse(req.url).pathname;

    res.writeHead(200, {
        'content-type': 'text/html; charset = utf8'
    })

    if (method == 'get') {
        if (pathname == "/" || pathname == '/index') {
            res.end('welcome to homepage')
        } else if (pathname == "/list") {
            res.end('welcom to list')
        } else {
            res.end('not found')
        }

    } else if (method == 'post') {

    } else {

    }

}).listen(3000, () => {
    console.log('app.js has been initiated')
})