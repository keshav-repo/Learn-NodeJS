const fs = require('fs');
const fastcsv = require('fast-csv');
//const db = require('./your-database-connection');

const csvFilePath = 'files/employee.csv';

fs.createReadStream(csvFilePath)
  .pipe(fastcsv.parse({ headers: true }))
  .on('data', (row) => {
    // Process each row and insert/update data in your database.
    // Example: db.insertOrUpdate(row);
    console.log('row data is');
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file processing complete.');
  });
