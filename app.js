const express = require('express');
const app = express();

// returns server
app.listen(3000, 'localhost', () => {
    console.log('listening on port 3000...');
});

app.get('/', (req, res) => {
    // res.send('<p>Bye bye!!!</p>'); // infers content type and status code!
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    // res.send();
    res.sendFile('./views/about.html', { root: __dirname });
});

// middleware - use this function for every single request
// runs only when code reaches this part
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});