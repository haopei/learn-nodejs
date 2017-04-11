
// returns a function
const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('Hello Express');
});

app.get('/profile/:id', function(req, res) {
    res.send('Profile ID: ' + req.params.id);
})

app.listen(3000);
