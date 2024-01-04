const shiftLetters = (shifts, options = {isCaseSensitive: true}) => {
  const NUMBER_OF_LETTERS = 26;
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
  const NUMBER_OF_LETTERS = 26;
  const asciiLetter = letter.charCodeAt();

  if (asciiLetter === 32) return asciiLetter;
  if (asciiLetter >= 48 && asciiLetter <= 57) return asciiLetter;

  const shiftOperation = asciiLetter + shifts;

  return shiftOperation > 122 ? shiftOperation - NUMBER_OF_LETTERS : shiftOperation;
}



export const caesarCipher = (to_encrypt, shifts = 0, options = { isCaseSensitive: false }) => {
  if (to_encrypt === undefined) return null;

  const UPPERCASE_REGEX = /[A-Z]+/g;
  const NUMBERS_REGEX = /[0-9]+/g;

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

  

  console.log(to_encryptArray)

  const encrypted = [];
  const shiftedLetters = shiftLetters(shifts);

  for ( let i = 0 ; i < to_encrypt.length ; i = i + 1 ) {
    // if(typeof to_encryptArray[i] === 'number') {
    //   encrypted.push(to_encryptArray[i]);
    //   continue;
    // }

    encrypted.push(
      String.fromCharCode(
        shiftLetter(to_encryptArray[i], shifts)
        // shiftedLetters.get(to_encryptArray[i].charCodeAt())
        )
    )
  }

  return encrypted.join('');
}