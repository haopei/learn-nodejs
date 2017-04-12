const bodyParser = require('body-parser')
const express = require('express')

const app = express()

const urlEncodedParser = bodyParser.urlencoded({ extended: false })


// let express know that we are using ejs as 'view engine'
app.set('view engine', 'ejs')

app.get('/contact', function(req, res) {
    // Visit http://127.0.0.1:3000/contact?name=haopei&age=29
    res.render('contact', { query: req.query })
})

app.post('/contact', urlEncodedParser, function(req, res) {
    // The urlEncodedParser middleware gives access to req.body
    // which contains submitted form values
    console.log(req.body);
    res.render('contact-success', { data: req.body })
})

app.listen(3000)
console.log('listening on port 3000')
