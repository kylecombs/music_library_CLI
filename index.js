#!/usr/bin/env node
const Collection = require('./src/interface/collection');
const process = require('process');
const processInput = require('./cli');

const myCollection = Collection({});

console.log('\nWelcome to your music collection!\n');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt('> ');
rl.prompt();
rl.on('line', function (line) {
  processInput(line, myCollection, rl);

  rl.prompt();
}).on('close', function () {
  process.exit(0);
});
