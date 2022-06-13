const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let path = __dirname + '/views/';
    let status = 200;

    switch (req.url) {
        case '/':
            path += 'indexs.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            status = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log('an error occurred:', err);
            res.statusCode = 503;
            res.end();
        } else {
            res.statusCode = status;
            res.write(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000...');
});