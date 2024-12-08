import { describe, it, expect } from 'vitest';
import { capitalize, reverseString } from './script';
import { Calculator } from './script';

describe('Capitalize', () => {
  it('should return string with first letter capitalized', () => {
    expect(capitalize('hello')).toEqual('Hello');
  });
});

describe('ReverseString', () => {
  it('should return reversed version of string', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });
});

describe('Calculator', () => {
  const calculator = new Calculator();

  describe('Add', () => {
    it('should return the sum', () => {
      expect(calculator.add(1, 1)).toEqual(2);
    });
  });

  describe('Subtract', () => {
    it('should return the difference', () => {
      expect(calculator.subtract(2, 1)).toEqual(1);
    });
  });

  describe('Multiply', () => {
    it('should return the product', () => {
      expect(calculator.multiply(2, 3)).toEqual(6);
    });
  });

  describe('Divide', () => {
    it('should return the quotient', () => {
      expect(calculator.divide(10, 2)).toEqual(5);
    });
  });
});
