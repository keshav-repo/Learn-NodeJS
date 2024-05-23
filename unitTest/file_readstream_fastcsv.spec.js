const fs = require('fs');
const fastcsv = require('fast-csv');
const { Readable } = require('stream'); // Import the Readable stream

// Mock fs.createReadStream
jest.mock('fs');

describe('readAndParseCSV', () => {

  it('should read and parse CSV data', (done) => {
    const dataToParse = 'name,age\nAlice,30\nBob,25\nCharlie,35';

    // Create a readable stream from the data
    const readableStream = new Readable({
      read() {
        this.push(dataToParse);
        this.push(null); // Signal the end of the stream
      },
    });

    // Mock fs.createReadStream to return the readable stream
    fs.createReadStream.mockReturnValue(readableStream);

    const records = [];
    fs.createReadStream('data.csv')
      .pipe(fastcsv.parse({ headers: true }))
      .on('data', (row) => {
        records.push(row);
      })
      .on('end', () => {
        expect(records).toEqual([
          { name: 'Alice', age: '30' },
          { name: 'Bob', age: '25' },
          { name: 'Charlie', age: '35' },
        ]);
        done(); // Signal that the test is complete
      })
      .on('error', (err) => {
        console.error('An error occurred:', err);
      });

  });

  it('should read data from a stream', (done) => {
    const dataToParse = 'name,age\nAlice,30\nBob,25\nCharlie,35';

    // Create a readable stream from the data
    const readableStream = new Readable({
      read() {
        this.emit('error', new Error('Simulated error'));
      },
    });

   // readableStream.emit('error', new Error('Simulated error'));

    fs.createReadStream.mockReturnValue(readableStream);

    const records = [];
    const stream = fs.createReadStream('data.csv');

    stream
      .pipe(fastcsv.parse({ headers: true }))
      .on('data', (row) => {
        records.push(row);
      })
      .on('end', () => {
        expect(records).toEqual([
          { name: 'Alice', age: '30' },
          { name: 'Bob', age: '25' },
          { name: 'Charlie', age: '35' },
        ]);
        done(); // Signal that the test is complete
      })
      .on('error', (err) => {
        console.error('An error occurred:', err);
        done();
      });

    // stream
    //   .on('data', (row) => {
    //     records.push(row);
    //   })
    //   .on('end', () => {
    //     expect(records).toEqual(dataToRead); 
    //     done();
    //   })
    //   .on('error', (error) => {
    //     expect(error.message).toBe('Simulated error'); 
    //     done(); 
    //   });


  });

});

