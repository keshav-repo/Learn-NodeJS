let estimatePi = require('./montecarlo');

const numPoints = 1e10;

const piEstimate = estimatePi(numPoints);
console.log(`pi estimate is ${piEstimate}`)

const piEstimate2 = estimatePi(numPoints);
console.log(`pi estimate is ${piEstimate2}`)

const piEstimate3 = estimatePi(numPoints);
console.log(`pi estimate is ${piEstimate3}`)
