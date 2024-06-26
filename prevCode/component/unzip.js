const fs = require('fs');
const zlib = require('zlib');

function unzipFile(inputFilePath, outputFilePath) {
  const readStream = fs.createReadStream(inputFilePath);
  const writeStream = fs.createWriteStream(outputFilePath);
  const unzipStream = zlib.createUnzip();

  readStream.pipe(unzipStream).pipe(writeStream);

  writeStream.on('error', (err) => {
    console.error('Error writing output file:', err);
  });

  writeStream.on('finish', () => {
    console.log('Unzipping complete. Output file:', outputFilePath);
  });
}

module.exports = unzipFile;

