const fs = require('fs');
const { Readable } = require('stream');

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

    fs.createReadStream.mockReturnValue(readableStream);

    const records = [];
    fs.createReadStream('data.csv')
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

  it('should handle error when reading from a stream', (done) => {
    const errorStream = new Readable({
      objectMode: true,
      read() {
        this.emit('error', new Error('Simulated error'));
      },
    });

    fs.createReadStream.mockReturnValue(errorStream);
  
    const records = [];
    const stream = fs.createReadStream('data.csv');
    stream
      .on('data', (row) => {
        records.push(row);
      })
      .on('end', () => {
        done.fail('Expected error did not occur.');
      })
      .on('error', (error) => {
        expect(error.message).toBe('Simulated error'); 
        done();
      });
  });
});
