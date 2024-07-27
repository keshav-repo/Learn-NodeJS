const estimatePi = require('./montecarlo');

const numPoints = parseInt(process.argv[2], 10);
const result = estimatePi(numPoints);
console.log(result);
process.send(result);
process.exit(0);

