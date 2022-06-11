const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch (req.url) {
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

    console.log('>>> the path:', path);

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log('an error occurred: ', err);
            res.end('error!!!');
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000...')
});