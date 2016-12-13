import expect from 'expect';
import _ from 'lodash';

import { fizzBuzz, printResults } from './';

describe('FizzBuzz', () => {
  it('if received 1 returns 1', () => {
    expect(fizzBuzz(1)).toBe(1);
  });

  it('if received 3 returns Fizz', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('if received 5 returns Buzz', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('if received 6 returns Fizz', () => {
    expect(fizzBuzz(6)).toBe('Fizz');
  });

  it('if received 10 returns Fizz', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  it('if received 15 returns FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('if received 30 returns FizzBuzz', () => {
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

  it('if received 13 returns Fizz', () => {
    expect(fizzBuzz(13)).toBe('Fizz');
  });

  it('if received 43 returns Fizz', () => {
    expect(fizzBuzz(43)).toBe('Fizz');
  });

  it('if received 52 returns Buzz', () => {
    expect(fizzBuzz(52)).toBe('Buzz');
  });
});

describe('printResults', () => {
  it('should print result from 1 to 5', () => {
    expect(printResults(5)).toEqual([
      1,
      2,
      'Fizz',
      4,
      'Buzz'
    ])
  });
});
