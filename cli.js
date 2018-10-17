#!/usr/bin/env node
const yargs = require('yargs')
const jetpack = require('fs-jetpack')

const input = yargs
  .alias('i', 'input')
  .describe('i', 'input file')
  .help('help')
  .argv

if (!input) {
  console.error('must specify an input file')
  process.exit(1)
}

if (jetpack.exists(input) !== 'file') {
  console.error('invalid input file')
  process.exit(1)
}

// TODO: parse input file, iterate, print, then exit
