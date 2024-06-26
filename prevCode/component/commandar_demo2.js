// const PROGRAM = require('commander');

// PROGRAM
//   .option('--employeeJob', 'Employee job')
//   .parse(process.argv);

// if(PROGRAM.employeeJob){
//     console.log('employee job');
// }

// const PROGRAM = require('commander');

// PROGRAM
//   .option('--employeeJob', 'Employee job')
//   .parse(process.argv);

// // console.log(PROGRAM);
// if(PROGRAM.employeeJob) {
//   console.log('Employee job');
// }


const PROGRAM = require('commander');

PROGRAM
  .option('--employeeJob', 'Employee job')
  .parse(process.argv);

console.log(PROGRAM);

var istrue = false;
if (PROGRAM.employeeJob !== null && PROGRAM.employeeJob !== undefined) {
  console.log('Employee job');
  istrue = true;
  console.log("enenee");
}

if(istrue){
    console.log('is true');
}

