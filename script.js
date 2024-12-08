export function capitalize(string) {
  let chars = string.split('');
  chars[0] = chars[0].toUpperCase();
  return chars.join('');
}

export function reverseString(string) {
  return string.split('').reverse().join('');
}

export class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}
