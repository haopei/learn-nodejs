
// returns a function
const express = require('express');
const app = express();

// let express know that we are using ejs as 'view engine'
app.set('view engine', 'ejs');

app.get('/profile/:id', function(req, res) {
    // fetch data from datastore
    let data = {
        name: 'Haopei',
        location: 404,
        hobbies: ['eating', 'learning','poker']
    }

    // 'profile' corresponds to profile.ejs inside views
    // note: 'render' instead of 'send'
    res.render('profile', {
        person: req.params.id,
        data: data
    });
});

app.get('/', function(req, res) {
    res.send('Hello Express');
});

app.listen(3000);
