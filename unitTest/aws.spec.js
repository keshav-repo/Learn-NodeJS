var s3 = require('s3-node-client');
 
var client = s3.createClient({
  maxAsyncS3: 20,     // this is the default
  s3RetryCount: 3,    // this is the default
  s3RetryDelay: 1000, // this is the default
  multipartUploadThreshold: 20971520, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: {
    accessKeyId: "your s3 key",
    secretAccessKey: "your s3 secret",
    region: "your region"
  },
});

var uploader = client.uploadFile(params);
uploader.on('error', function(err) {
  console.error("unable to upload:", err.stack);
});
uploader.on('progress', function() {
  console.log("progress", uploader.progressMd5Amount,
            uploader.progressAmount, uploader.progressTotal);
});
uploader.on('end', function() {
  console.log("done uploading");
});


// s3Uploader.test.js
const s3Uploader = require('./s3Uploader');

jest.mock('s3-node-client', () => {
  const originalModule = jest.requireActual('s3-node-client');

  // Mock the createClient function to return a custom object
  const createClient = jest.fn(() => {
    return {
      uploadFile: jest.fn(() => {
        // Mock the uploader object with event listeners
        const uploader = {
          on: jest.fn((event, callback) => {
            if (event === 'error') {
              // Simulate an error event
              callback(new Error('Mocked upload error'));
            } else if (event === 'progress') {
              // Simulate a progress event
              callback();
            } else if (event === 'end') {
              // Simulate an end event
              callback();
            }
          }),
        };
        return uploader;
      }),
    };
  });

  return {
    ...originalModule,
    createClient,
  };
});

describe('s3Uploader', () => {
  it('should handle the error event', () => {
    // Your test logic here, invoke the uploader with appropriate parameters
    // Verify that it correctly handles the error event
  });

  it('should handle the progress event', () => {
    // Your test logic here, invoke the uploader with appropriate parameters
    // Verify that it correctly handles the progress event
  });

  it('should handle the end event', () => {
    // Your test logic here, invoke the uploader with appropriate parameters
    // Verify that it correctly handles the end event
  });
});


