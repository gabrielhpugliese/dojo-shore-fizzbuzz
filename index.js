import _ from 'lodash';

export function fizzBuzz(number) {
  const fizzBuzz = fizzBuzzFrom(number);

  if (fizzBuzz) {
    return fizzBuzz;
  }

  return number;
}

function fizzBuzzFrom(number) {
  let fizzBuzz = '';

  if (shouldPrintFizz(number)) {
    fizzBuzz += 'Fizz';
  }

  if (shouldPrintBuzz(number)) {
    fizzBuzz += 'Buzz';
  }

  return fizzBuzz;
}

function shouldPrintFizz(number) {
  return !(number % 3) || includesNumber(number, '3');
}

function shouldPrintBuzz(number) {
  return !(number % 5) || includesNumber(number, '5');
}

function includesNumber(number, include) {
  return number.toString().includes(include);
}

export function printResults(range) {
  return _.range(1, range + 1).map(fizzBuzz)
}
