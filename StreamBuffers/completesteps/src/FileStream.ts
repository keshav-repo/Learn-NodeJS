import { createReadStream, createWriteStream } from 'fs';

const readStream = createReadStream('./data/largefile.txt');
const writeStream = createWriteStream('./data/output.txt');

readStream.on('data', (chunk: Buffer) => {
    console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
    console.log('Finished reading file.');
});

writeStream.write('Hello, ');
writeStream.write('world!\n');
writeStream.end();
