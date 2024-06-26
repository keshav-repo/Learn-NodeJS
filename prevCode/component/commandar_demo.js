const { program } = require('commander');

program
  .option('--first')
  .option('-s, --separator <char>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;

console.log(program.opts());

console.log(options.first);


// console.log(program.args);

// console.log(program.args[0].split(options.separator, limit));
