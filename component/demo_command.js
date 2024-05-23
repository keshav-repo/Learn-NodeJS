const program = require('commander');

program
    .option('-c, --connect ', 'Connect to a host, (Supports IP:port and hostname:port.)')
    .option('-l, --listen ', 'Automatically accept connections on this port.')
    .option('-i, --input [device-name]', 'Input device, (Leave empty to use the default recording device.)')
    .option('-o, --output [device-name]', 'Output device, (Leave empty to use the default playback device.)')
    .option('-a, --channels [count]', 'Number of channels 1=mono; 2=stereo (Leave empty to use 1.)', 1)
    .option('--employeeJob', 'Employee job')
    .parse(process.argv)

console.log('--connect: ' + program.connect)
console.log('--listen: ' + program.listen)
console.log('--input: ' + program.input)
console.log('--output: ' + program.output)

console.log('--emp job: ' + program.employeeJob)
