const fizzbuzz = require('./fizzbuzz')

/*
 * Check numbers from 1 to 100, print the desired output
 */
function printFizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    console.log(fizzbuzz(i))
  }
}

printFizzBuzz()
