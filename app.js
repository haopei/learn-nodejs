/**
 * Setting up a server
 *  How to run:
 *      1. $ node app
 *      2. visit 127.0.0.1:3000 on browser
 */


const http = require('http');

const server = http.createServer(function(req, res) {

    // Configure the header of the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // End the response by sending data back to the browser
    res.end('Hello Node Server');
})

//
server.listen(3000, '127.0.0.1');

console.log('Listening on 127.0.0.1:3000');
