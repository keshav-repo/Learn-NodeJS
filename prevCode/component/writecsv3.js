const fastCSV = require('fast-csv');

const data = [['date', 'value'], ['2023-09-25', 10], ['2023-09-26', 20]];

const csvWriter = fastCSV.createCSVWriter({
  newline: true,
});

csvWriter.write(data);

