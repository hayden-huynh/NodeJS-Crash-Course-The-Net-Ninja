const fs = require('fs');

// ========== READ/WRITE STREAM ==========
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'}); // Set the encoding here so that the read data is immediately in human-readable format

const writeStream = fs.createWriteStream('./docs/blog4.txt');

// Listen to 'data' event to receive chunks of data from the read file
readStream.on('data', (chunk) => {
  console.log('---------- NEW CHUNK ----------');
  console.log(chunk);

  writeStream.write('\n---------- NEW CHUNK ----------\n');
  writeStream.write(chunk);
})

// ========== PIPING ==========
readStream.pipe(writeStream); // Pipe what is read in the readStream directly to the writeStream