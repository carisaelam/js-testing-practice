import { describe, it, expect } from 'vitest';
import { capitalize, reverseString, caesarCipher, analyzeArray } from './script';
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

describe('Caesar Cipher', () => {
  it('should shift letters by shift factor', () => {
    expect(caesarCipher('aac', 1)).toEqual('bbd');
  });

  it('should wrap around', () => {
    expect(caesarCipher('z', 1)).toEqual('a');
  });

  it('should work for upper and lower case', () => {
    expect(caesarCipher('AzB', 1)).toEqual('BaC');
  });

  it('should return non-alphabet characters', () => {
    expect(caesarCipher('abc$', 2)).toEqual('cde$');
  });
});

describe('Analyze Array', () => {
  it('should return an object with avg, min, max, length props', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
