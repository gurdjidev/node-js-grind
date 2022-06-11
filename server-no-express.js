const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    const num = _.random(0, 10);
    console.log('>>> num:', num);

    const greet = _.once(() => {
        console.log('HELLO STRANGER!!!');
    });

    greet();

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    console.log('>>> path:', path);

    res.setHeader('Content-Type', 'text/html');

    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.log('an error occurred!!!');
            res.end('error!!!');
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000...');
});