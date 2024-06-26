const fs = require('fs');
const csv = require('fast-csv');

// Define your CSV data
const data = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
];

// Specify the path to the CSV file
const filePath = 'files/data.csv'; // Replace with your file path

// Create a writable stream for writing CSV data
const writableStream = fs.createWriteStream(filePath);

// Write your CSV data to the stream
csv
  .write(data, { headers: true })
  .pipe(writableStream)
  .on('finish', () => {
    // Add a newline character to the end of the file
    fs.appendFile(filePath, '\n', (err) => {
      if (err) {
        console.error('Error adding newline:', err);
      } else {
        console.log('Newline added to the CSV file.');
      }
    });
  })
  .on('error', (err) => {
    console.error('Error writing CSV data:', err);
  });
