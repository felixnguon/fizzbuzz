/*
 * Check number and conditionally return result
 * if the number is a multiply of 3, return Fizz
 * if the number is a multiply of 5, return Buzz
 * if the number is a multiply of 3 & 5, return FizzBuzz
 * @params i number
 * @return output string | number
 */
function fizzbuzz(i) {
  let output = ''
  if (i % 3 == 0) output += 'Fizz'
  if (i % 5 == 0) output += 'Buzz'
  if (output == '') output = i
  return output
}

module.exports = fizzbuzz
