/**
 * Sending stream of data using pipes.
 */

const fs = require('fs');

// Create a WriteStream object
let myReadStream = fs.createReadStream(__dirname + '/read-from-me.txt', 'utf8');

// Create WriteStream
let myWriteStream = fs.createWriteStream(__dirname + '/write-to-me.txt');

// this function...
myReadStream.pipe(myWriteStream);

// ...same as this
// myReadStream.on('data', function(chunk) {
//     myWriteStream.write(chunk);
// });
