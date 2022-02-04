#!/usr/bin/env node

const process = require('process');
// const stdin = process.openStdin();

// stdin.addListener('data', function (d) {
//   console.log('you entered: ' + d.toString().trim());
// });

console.log('Welcome to you music collection!\n');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt('>');
rl.prompt();
rl.on('line', function (line) {
  if (line === 'close') rl.close();
  rl.prompt();
}).on('close', function () {
  process.exit(0);
});

// console.log(process.argv);
