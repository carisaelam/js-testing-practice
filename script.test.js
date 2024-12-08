import { describe, it, expect } from 'vitest';
import { capitalize, reverseString } from './script';

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
