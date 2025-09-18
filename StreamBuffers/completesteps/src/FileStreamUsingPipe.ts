const fs = require('fs');
const readStream = fs.createReadStream('./data/largefile.txt');
const writeStream = fs.createWriteStream('./data/output.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
    console.log('Finished writing to destination.txt');
});
