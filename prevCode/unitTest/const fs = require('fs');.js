const fs = require('fs');
const { Readable } = require('stream');
const { mocked } = require('fs'); 

jest.mock('fs');

describe('readDataFromFile', () => {
  it('should read data from a stream', (done) => {
    const dataToRead = ['row1', 'row2', 'row3'];

    const readableStream = new Readable({
      objectMode: true,
      read() {
        for (const data of dataToRead) {
          this.push(data);
        }
        this.push(null); 
      },
    });

    readableStream.emit('error', new Error('Simulated error'));

    mocked(fs.createReadStream).mockReturnValue(readableStream);

    const records = [];
    const stream = fs.createReadStream('data.csv');
    stream
      .on('data', (row) => {
        records.push(row);
      })
      .on('end', () => {
        expect(records).toEqual(dataToRead); 
        done();
      })
      .on('error', (error) => {
        expect(error.message).toBe('Simulated error'); 
        done(); 
      });
  });
});
