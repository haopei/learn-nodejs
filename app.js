/**
 * Piping data from ReadStream to server response
 */

const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // A stream of incoming data (from read-from-me.txt)
    // is piped towards the server response
    const readStream = fs.createReadStream(__dirname + '/read-from-me.txt', 'utf8');
    readStream.pipe(res);
});

server.listen('3000', '127.0.0.1');
console.log('listening on 127.0.0.1:3000');
