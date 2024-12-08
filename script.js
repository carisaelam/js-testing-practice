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

export function caesarCipher(string, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetLength = alphabet.length;

  let newWord = [];

  string.split('').forEach((letter) => {
    console.log('letter', letter);

    if (!alphabet.includes(letter.toLowerCase())) {
      newWord.push(letter);
      return;
    }

    const isUpperCase = letter === letter.toUpperCase();
    const baseLetter = letter.toLowerCase();
    let shiftedIndex = (alphabet.indexOf(baseLetter) + shift) % alphabetLength;

    if (shiftedIndex < 0) {
      shiftedIndex += alphabetLength;
    }

    let newLetter = alphabet[shiftedIndex];
    if (isUpperCase) {
      newLetter = newLetter.toUpperCase();
    }

    newWord.push(newLetter);
  });

  return newWord.join('');
}
