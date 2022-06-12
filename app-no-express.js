const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    res.setHeader('Content-Type', 'text/html');

    let path = '/views/';
    let statusCode = 200;

    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            statusCode = 404;
            break
    }

    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            console.log('an error occurred while reading file...', err);
            res.end('error while reading file!!!');
        } else {
            res.statusCode = statusCode;
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000...');
});