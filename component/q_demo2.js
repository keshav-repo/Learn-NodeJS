// Import the Q library
const Q = require('q');

// Simulate an asynchronous function that returns a promise
function asyncFunction(value) {
  const deferred = Q.defer();

  setTimeout(() => {
    if (value === 'success') {
      deferred.resolve(`Async operation completed successfully with value: ${value}`);
    } else {
      deferred.reject(new Error(`Async operation failed with value: ${value}`));
    }
  }, 1000);

  return deferred.promise;
}

// Using the asyncFunction with promises and handling success and errors
asyncFunction('success')
  .then((result) => {
    console.log('Success:', result); // Handle success
    return asyncFunction('another success'); // Return another promise
  })
  .then((result) => {
    console.log('Success:', result); // Handle success of the second promise
    return asyncFunction('failure'); // Return a promise that will reject
  })
  .then((result) => {
    console.log('Success:', result); // This won't be called in case of an error
  })
  .catch((error) => {
    console.error('Error:', error.message); // Handle errors from any of the promises
  })
  .finally(() => {
    console.log('Done'); // This will be executed regardless of success or error
  });
