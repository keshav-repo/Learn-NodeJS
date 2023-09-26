const fs = require('fs');
const csv = require('fast-csv');

// Define the new data to append
const newData = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
];

// Specify the path to the CSV file
const filePath = 'files/data.csv'; // Replace with your file path

// Check if the file exists
const fileExists = fs.existsSync(filePath);

// Create a writable stream in append mode for the CSV file
// const destinationStream = fs.createWriteStream(filePath, { flags: fileExists ? 'a' : 'w' });

const destinationStream = fs.createWriteStream(filePath, { flags: 'a' });

// Write the new data to the CSV file
csv
    .write(newData, { headers: fileExists ? false : true })
    .pipe(destinationStream, { end: true })
    .on('finish', () => {
        fs.appendFile(filePath, '\n', (err) => {
            if (err) {
                console.error('Error adding newline:', err);


                if (fileExists) {
                    console.log('Data has been appended to the existing CSV file.');
                } else {
                    console.log('A new CSV file has been created with the data.');
                }

            } else {
                console.log('Newline added to the CSV file.');
            }
        });

    });

// csv.

