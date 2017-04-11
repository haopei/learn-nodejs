/**
 * Readable streams
 */

const fs = require('fs');

// Create a readstream object
let myReadStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');
console.log(myReadStream);

// The ReadStream object inherits the EventEmitter object.
// It listens for the 'data' event which indicates that a new 'buffer' of data has arrived
myReadStream.on('data', function(chunk) {
    console.log('new chunk of data received: ', chunk);
});
