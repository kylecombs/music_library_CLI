#!/usr/bin/env node
const collection = require('./src/interface/collection');
const process = require('process');
const processInput = require('./cli');
// const stdin = process.openStdin();

// stdin.addListener('data', function (d) {
//   console.log('you entered: ' + d.toString().trim());
// });

const myCollection = collection();

console.log('\nWelcome to you music collection!\n');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt('> ');
rl.prompt();
rl.on('line', function (line) {
  // if (line === 'quit') rl.close();
  processInput(line, myCollection, rl);

  rl.prompt();
}).on('close', function () {
  process.exit(0);
});

// console.log(process.argv);
