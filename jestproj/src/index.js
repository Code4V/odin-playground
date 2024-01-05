import { default as capitalize } from './functions/capitalize.js';
import { default as reverseString } from './functions/reverseString.js';
import { calculator } from './functions/calculator.js';
import { caesarCipher } from './functions/caesarCipher.js';
import { analyzeArray } from './functions/analyzeArray.js';

const capthis = 'test';

console.log(
  reverseString(capthis),
  caesarCipher('this should be good hehe', 31),
  analyzeArray([1, 4, 5, 1, 0])
)
console.log(
  calculator(2, 1, 4, 1,'sasda', 4, 'as').sum()
)