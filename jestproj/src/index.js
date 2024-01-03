import { default as capitalize } from './functions/capitalize.js';
import { default as reverseString } from './functions/reverseString.js';
import { calculator } from './functions/calculator.js';
import { caesarCipher } from './functions/caesarCipher.js';

const capthis = 'test';

console.log(
  reverseString(capthis),
  caesarCipher('Jeanne Francis Rivas', 2)
)
console.log(
  calculator(2, 1, 4, 1,'sasda', 4, 'as').sum()
)