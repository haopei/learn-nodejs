/**
 * Read and Write Streams
 */

const fs = require('fs');

// Create a WriteStream object
let myReadStream = fs.createReadStream(__dirname + '/read-from-me.txt', 'utf8');

// Create WriteStream
let myWriteStream = fs.createWriteStream(__dirname + '/write-to-me.txt');

// The ReadStream object inherits the EventEmitter object.
// It listens for the 'data' event which indicates that a new 'buffer' of data has arrived
myReadStream.on('data', function(chunk) {
    // write to the file one chunk at a time
    myWriteStream.write(chunk);
});
