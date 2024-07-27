const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const os = require('os');

if (isMainThread) {

    const cpuCount = os.cpus().length;
    console.log(`cpu count ${cpuCount}`);

    const workerNames = ['Worker A', 'Worker B', 'Worker C'];
    workerNames.forEach((name, index) => {
        const worker = new Worker(__filename, {
            workerData: { num: 1e10, name: name }
        });

        worker.on('message', (message) => {
            console.log(`${name} result: ${message.length}`);
        });

        worker.on('error', (error) => {
            console.error(`${name} error:`, error);
        });

        worker.on('exit', (code) => {
            if (code !== 0) {
                console.error(`${name} stopped with exit code ${code}`);
            } else {
                console.log(`${name} completed successfully`);
            }
        });
    });

} else {
    let estimatePi = require('./montecarlo');
    console.log(workerData);
    const result = estimatePi(workerData.num, workerData.name);
    console.log(`pi value is = ${result}`);
    parentPort.postMessage(result);
}

