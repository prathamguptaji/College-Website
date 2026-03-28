const express = require('express');
const path = require('path');

const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Home route → index.ejs
app.get('/', (req, res) => {
    res.render('index', {
        title: "Home"
    });
});

// Academics page → aca&depart.ejs
app.get('/academics-and-department', (req, res) => {
    res.render('aca&depart', {
        title: "Academics & Departments"
    });
});

// 404 page (optional)
app.use((req, res) => {
    res.status(404).render('404', {
        title: "404 Not Found"
    });
});

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});