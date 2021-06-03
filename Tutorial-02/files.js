const fs = require('fs');

// ========== reading files ==========
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log('last line'); // This shows up first because operation above is asynchronous

// ========== writing files ==========
fs.writeFile('./docs/blog1.txt', 'Hello, world!', () => {
  console.log('File was written');
});

// File will be created if not existing yet
fs.writeFile('./docs/blog2.txt', 'Hello, again!', () => {
  console.log('File was written');
});

// ========== directories ==========

if (!fs.existsSync('./assets')) { // Check if directory already exists
  // Create a directory
  // If directory already exists, running this will return an error. Should add a check
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Folder created');
  })
} else {
  // Remove a directory
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Folder deleted');
  })
}

// ========== deleting files ==========
if (fs.existsSync('./docs/deleteme.txt')) { // Check if file already exists
  // Delete a file
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('File deleted');
  })
}