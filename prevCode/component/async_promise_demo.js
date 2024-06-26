const async = require('async');

// Sample function that returns a Promise
function asyncFunction(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value * 2);
    }, 1000);
  });
}

// Define the waterfall functions
const functions = [
  (callback) => {
    // First function
    console.log('Step 1');
    callback(null, 5); // Pass the result to the next function
  },
  (value, callback) => {
    // Second function
    console.log('Step 2');
    asyncFunction(value) // Call the function that returns a promise
      .then((result) => {
        callback(null, result); // Pass the promise result to the next function
      })
      .catch((error) => {
        callback(error); // Pass any errors to the waterfall callback
      });
  },
  (value, callback) => {
    // Third function
    console.log('Step 3');
    callback(null, value * 3); // Pass the result to the final callback
  },
];

// Run the waterfall
async.waterfall(functions, (error, result) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Final Result:', result);
  }
});


