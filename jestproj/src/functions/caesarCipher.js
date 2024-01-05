const NUMBER_OF_LETTERS = 26;
const SPACE_ASCII = 32;
const ZERO_ASCII = 48;
const NINE_ASCII = 57;
const UPPERCASE_START = 65;
const UPPERCASE_END = (UPPERCASE_START + NUMBER_OF_LETTERS) - 1; 
const PUNCTUATIONS_ASCII = [
  32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
  58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125,
  126 
  ]
const UPPERCASE_REGEX = /[A-Z]+/g;
const NUMBERS_REGEX = /[0-9]+/g;

const shiftedLettersMap = (shifts, options = {isCaseSensitive: true}) => {
  const ASCII_BIG_LETTERS_START = 65;
  const ASCII_SMALL_LETTERS_START = 97;

  const shiftedLettersMap = new Map();

  let baseLetters = Array.from( {length: NUMBER_OF_LETTERS}, (_, i) => i + ASCII_SMALL_LETTERS_START);

  if (options.isCaseSensitive === true) {
    baseLetters = baseLetters.
      concat( Array.from({length: NUMBER_OF_LETTERS}, (_, i) => i + ASCII_BIG_LETTERS_START) );
  }

  const shiftedLetters = baseLetters.map(e => {
    const shifted = e + shifts;
    if (shifted > 122) return shifted - NUMBER_OF_LETTERS;
    return shifted;
  });

  let i = options.isCaseSensitive === true ? NUMBER_OF_LETTERS * 2 : NUMBER_OF_LETTERS;

  while ( i >= 0 ) {
    shiftedLettersMap.set(baseLetters[i], shiftedLetters[i])
    i = i - 1;
  }

  shiftedLettersMap.set(32, 32);
  shiftedLettersMap.delete(undefined)

  return shiftedLettersMap;
}

const shiftLetter = (letter, shifts) => {
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
    return shiftOperation > UPPERCASE_END ? shiftOperation - NUMBER_OF_LETTERS : shiftOperation
  }

  return (shiftOperation > 97 && shiftOperation > 122) ? 
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
  // const shiftedLetters = shiftedLettersMap(shifts);

  for ( let i = 0 ; i < to_encrypt.length ; i = i + 1 ) {
    // if(typeof to_encryptArray[i] === 'number') {
    //   encrypted.push(to_encryptArray[i]);
    //   continue;
    // }

    encrypted.push(
      String.fromCharCode(
        shiftLetter(to_encryptArray[i], normalizedShift)
        // shiftedLetters.get(to_encryptArray[i].charCodeAt())
        )
    )
  }

  return encrypted.join('');
}