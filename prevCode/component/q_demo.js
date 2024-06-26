// Import the Q library
const Q = require("q");

// Simulate an asynchronous function that may encounter an error
function asyncFunction(success) {
  const deferred = Q.defer();

  setTimeout(() => {
    if (success) {
      deferred.resolve("Async operation completed successfully");
    } else {
      deferred.reject(new Error("Async operation encountered an error"));
    }
  }, 1000);

  return deferred.promise;
}

// Using the asyncFunction with promises and handling errors
asyncFunction(true) // Pass 'false' to simulate an error
  .then((result) => {
    console.log("Success:", result); // This won't be called in case of an error
  })
  .catch((error) => {
    console.error("Error:", error.message); // Handle the error here
  })
  .finally(() => {
    console.log("Done"); // This will be executed regardless of success or error
  });
