/**
 * Using fs to read and write files (synchronously)
 */


const fs = require('fs');


// When fs reads a file, it reads in binary.
// The 'utf8' encoding tells Node to convert binary to readable format
// Sync explicitly tells node that this is a blocking sync function
let readMeContent = fs.readFileSync('README.md', 'utf8');

console.log(typeof readMeContent);
// string

// Write to another file
fs.writeFileSync('write-to-me.txt', readMeContent);
