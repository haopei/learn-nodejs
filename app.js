const express = require('express');
const app = express();

// let express know that we are using ejs as 'view engine'
app.set('view engine', 'ejs');

app.get('/contact', function(req, res) {
    // Visit http://127.0.0.1:3000/contact?name=haopei
    res.render('contact', { query: req.query })
});

app.listen(3000);
console.log('listening on port 3000');
