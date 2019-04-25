#!/usr/bin/env node

const grab = require('../src/index')

const site =
  process.argv.length > 2 ? process.argv.pop() : 'http://www.google.com'

grab(site)
  .then(filename => {
    console.info(`screenshot ${filename} created`)
    process.exit(0)
  })
  .catch(error => {
    console.error('Failed capturing screenshot', error)
    process.exit(1)
  })
