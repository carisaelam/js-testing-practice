export function capitalize(string) {
  let chars = string.split('');
  chars[0] = chars[0].toUpperCase();
  return chars.join('');
}

export function reverseString(string) {
  return string.split('').reverse().join('');
}
