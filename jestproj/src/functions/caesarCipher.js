const NUMBER_OF_LETTERS = 26;
const SPACE_ASCII = 32;
const ZERO_ASCII = 48;
const NINE_ASCII = 57;

const UPPERCASE_START = 65;
const UPPERCASE_END = (UPPERCASE_START + NUMBER_OF_LETTERS) - 1; 

const LOWERCASE_START = 97
const LOWERCASE_END = (LOWERCASE_START + NUMBER_OF_LETTERS) - 1;

const PUNCTUATIONS_ASCII = [
  32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
  58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125,
  126 
];

const UPPERCASE_REGEX = /[A-Z]+/g;
const NUMBERS_REGEX = /[0-9]+/g;

const shiftAsciiLetter = (letter, shifts) => {
  let isUpperCase = false;
  const asciiLetter = letter.charCodeAt();
  const shiftOperation = asciiLetter + shifts;

  if (asciiLetter >= UPPERCASE_START && asciiLetter <= UPPERCASE_END) {
    isUpperCase = true;
  }

  if (PUNCTUATIONS_ASCII.includes(asciiLetter)) return asciiLetter;
  if (asciiLetter === SPACE_ASCII) return asciiLetter;
  if (asciiLetter >= ZERO_ASCII && asciiLetter <= NINE_ASCII) return asciiLetter;

  if (isUpperCase) {
    return shiftOperation > UPPERCASE_END ? 
    shiftOperation - NUMBER_OF_LETTERS : shiftOperation
  }

  return shiftOperation > LOWERCASE_END ? 
  shiftOperation - NUMBER_OF_LETTERS : shiftOperation;
}



export const caesarCipher = (to_encrypt, shifts = 0, options = { isCaseSensitive: false }) => {
  if (to_encrypt === undefined) return null;
  if (typeof shifts === 'string') return new Error('Shifts should be a number')

  const normalizedShift = shifts % NUMBER_OF_LETTERS;
  const to_encryptArray = Array.from(to_encrypt)

  let foundUppercases;
  let foundNumbers;

  if ( options.isCaseSensitive === true ){
    while((foundUppercases = UPPERCASE_REGEX.exec(to_encrypt)) !== null){ 
      to_encryptArray[foundUppercases.index] = String.fromCharCode(to_encrypt.charCodeAt(foundUppercases.index) + 32);
    }
    while((foundNumbers = NUMBERS_REGEX.exec(to_encrypt)) !== null){
      to_encryptArray[foundNumbers.index] = parseInt(foundNumbers[0]);
    }
  }

  const encrypted = [];

  for ( let i = 0 ; i < to_encrypt.length ; i = i + 1 ) {
    encrypted.push(
      String.fromCharCode(
        shiftAsciiLetter(to_encryptArray[i], normalizedShift)
        )
    )
  }
  
  return encrypted.join('');
}