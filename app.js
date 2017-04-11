/**
 * Using fs to read and write files (synchronously)
 */


const fs = require('fs');

// readFile is async; readFileSync is sync.
fs.readFile('README.md', 'utf8', function(err, data) {
    // This body runs after the async operation of reading completes
    console.log('2')
    fs.writeFile('write-to-me.txt', data);
});


// '1' prints before '2' because fs.readFile immediately returns
// after sending fs.writeFile() to run asynchronously in another context
console.log('1');
