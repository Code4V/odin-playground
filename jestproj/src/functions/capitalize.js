export default function capitalize (to_capitalize) {
  const capitalize = [];
  for (let letter in to_capitalize) {
    if (parseInt(letter) === 0 && (to_capitalize.charCodeAt(0) - 32) > 65) {
      capitalize.push(String.fromCharCode(to_capitalize.charCodeAt(0) - 32));
    }
    else capitalize.push(to_capitalize[letter]);
  }

  return capitalize.join('');
}