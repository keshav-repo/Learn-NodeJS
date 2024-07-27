const { fork } = require('child_process');

const numPoints = 1e10;

const runEstimation = (numPoints) => {
    return new Promise((resolve, reject) => {
        const child = fork('./piEstimationChild.js', [numPoints]);

        child.on('message', (message) => {
            resolve(message);
        });

        child.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Child process exited with code ${code}`));
            }
        });

        child.on('error', (error) => {
            reject(error);
        });
    });
};

Promise.all([runEstimation(numPoints), runEstimation(numPoints), runEstimation(numPoints)])
    .then((results) => {
        results.forEach((result, index) => {
            console.log(`Estimation ${index + 1}: Pi is approximately ${result}`);
        });
    })
    .catch((err) => {
        console.error('An error occurred:', err);
    });
