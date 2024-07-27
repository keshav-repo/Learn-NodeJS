const estimatePi = (numPoints, threadName = null) => {
    let insideCircle = 0;

    //console.log(`number of points ${numPoints}`);
    for (let i = 0; i < numPoints; i++) {
        // console.log(`thread name ${threadName}`);
        const x = Math.random();
        const y = Math.random();
        if (x * x + y * y <= 1) {
            insideCircle++;
        }
    }

    return (insideCircle / numPoints) * 4;
};

module.exports = estimatePi;