const http = require('http');
const fs = require('fs')

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const data = {name: 'Haopei', age: '29' }
    // res expects a string or a stream object,
    // so we must stringify our data to be passed here
    res.end(JSON.stringify(data));
});


// Activate server on port 3000
server.listen('3000', '127.0.0.1');
console.log('listening on port 3000');
