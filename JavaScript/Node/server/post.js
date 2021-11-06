// to build http server
const http = require('http');

const querystring = require('querystring');


const app = http.createServer();
// a request from terminal
app.on('request', (req, res) => {

    let param = "";

    req.on('data', (vars) => {
        param += vars;
    })
    req.on('end', () => {

        let qstring = querystring.parse(param);
        console.log(qstring);

    })
    res.end('ok');
});

const port = 3000;
app.listen(port, () => {
    console.log('web server has been initiated');
});