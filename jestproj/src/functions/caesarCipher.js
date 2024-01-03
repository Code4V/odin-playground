const shiftLetters = (shifts) => {
  const NUMBER_OF_LETTERS = 26;

  const baseLetters = Array.from({length: NUMBER_OF_LETTERS}, (e, i) => i + 97);

  const shiftedLettersMap = new Map();

  const shiftedLetters = baseLetters.map(e => {
    const shifted = e + shifts;
    if (shifted > 122) return shifted - NUMBER_OF_LETTERS;
    return shifted;
  })

  let i = 0;

  while ( i < NUMBER_OF_LETTERS ) {
    shiftedLettersMap.set(baseLetters[i], shiftedLetters[i])
    i = i + 1;
  }

  return shiftedLettersMap;
}

export const caesarCipher = (to_encrypt, shifts) => {
  const encrypted = [];
  const shiftedLetters = shiftLetters(shifts);

  for ( let i = 0 ; i < to_encrypt.length ; i = i + 1 ) {
    
      encrypted.push(
        String.fromCharCode(
          shiftedLetters.get(to_encrypt[i].charCodeAt())
          )
      )
    
  }

  return encrypted.join('');
}