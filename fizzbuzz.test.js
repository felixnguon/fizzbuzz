const fizzbuzz = require('./fizzbuzz')

test('returns "Fizz" when number is 3', () => {
  expect(fizzbuzz(3)).toEqual('Fizz')
})

test('returns "Buzz" when number is 5', () => {
  expect(fizzbuzz(5)).toEqual('Buzz')
})

test('returns "FizzBuzz" when number is 15', () => {
  expect(fizzbuzz(15)).toEqual('FizzBuzz')
})

test('returns "FizzBuzz" when number is 60', () => {
  expect(fizzbuzz(30)).toEqual('FizzBuzz')
})

test('returns 7 when number is 7', () => {
  expect(fizzbuzz(7)).toEqual(7)
})

test('returns 17 when number is 17', () => {
  expect(fizzbuzz(17)).toEqual(17)
})

test('returns 23 when number is 23', () => {
  expect(fizzbuzz(23)).toEqual(23)
})

test('returns "Fizz" when number is 36', () => {
  expect(fizzbuzz(36)).toEqual('Fizz')
})

test('returns "Buzz" when number is 50', () => {
  expect(fizzbuzz(50)).toEqual('Buzz')
})
