const grab = require('../src/index')
console.log(process.argv)
const site = 'https://www.google.com'

grab(site)
  .then(filename => {
    console.info(`screenshot ${filename} created`)
    process.exit(0)
  })
  .catch(error => {
    console.error('Failed capturing screenshot', error)
    process.exit(1)
  })
