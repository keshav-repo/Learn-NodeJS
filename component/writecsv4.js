const fs = require('fs');
const csv = require('fast-csv');

// Define the new data to append
const newData = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
];

// Specify the path to the CSV file
const filePath = 'files/data.csv'; // Replace with your file path

// Check if the file exists
const fileExists = fs.existsSync(filePath);

// Create a writable stream in append mode for the CSV file
const destinationStream = fs.createWriteStream(filePath, { flags: fileExists ? 'a' : 'w' });

// Add a newline character after writing each set of data
newData.forEach((record) => {
  csv
    .write([record], { headers: false })
    .pipe(destinationStream, { end: false });
});

// End the stream with a newline character
destinationStream.end('\n', () => {
  if (fileExists) {
    console.log('Data has been appended to the existing CSV file.');
  } else {
    console.log('A new CSV file has been created with the data.');
  }
});
