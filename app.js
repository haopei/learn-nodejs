/**
 * Working with directories
 */

const fs = require('fs');



// async operation (sync version: mkdirSync())
fs.mkdir('myNewDirectory', function() {
    fs.writeFile('./myNewDirectory/ramblings.txt', 'The universe is big');
});

// We must delete all files from a directory before deleting the directory itself
// fs.unlink('./myNewDirectory/ramblings.txt', function() {
//     fs.rmdir('myNewDirectory');
// });
