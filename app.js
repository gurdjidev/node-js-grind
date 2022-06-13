const express = require('express');

const app = express();
const path = '/views/';

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myViews');

app.listen(3000, () => {
    console.log('listening on port 3000...');
});

const menu = {
    navItems: [
       { url: '/', name: 'home' },
       { url: '/about', name: 'about' },
       { url: '/about-us', name: 'about-us' },
       { url: '/blogs/create', name: 'new blog' }
    ]
};

app.get('/', (req, res) => {
    res.render('index', { ...menu, title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { ...menu, title: 'About' });
});

app.get('/about-us', (req, res) => {
    res.redirect('about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { ...menu, title: 'Create' });
});

app.use((req, res) => {
    res.status(404).render('404', { ...menu, title: 'Page Not Found - 404' });
});