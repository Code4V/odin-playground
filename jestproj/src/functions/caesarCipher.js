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

export const caesarCipher = (to_encrypt = 'test', shifts = 0, options = { isCaseSensitive: false }) => {
  const regex = /[A-Z]+/g;
  const to_encryptArray = Array.from(to_encrypt)

  let found;

  if ( options.isCaseSensitive === true ){
    while((found = regex.exec(to_encrypt)) !== null){ 
      to_encryptArray[found.index] = String.fromCharCode(to_encrypt.charCodeAt(found.index) + 32);
    }
  }

  to_encryptArray.join('')

  const encrypted = [];
  const shiftedLetters = shiftLetters(shifts);

  for ( let i = 0 ; i < to_encrypt.length ; i = i + 1 ) {
    encrypted.push(
      String.fromCharCode(
        shiftedLetters.get(to_encryptArray[i].charCodeAt())
        )
    )
  }

  return encrypted.join('');
}