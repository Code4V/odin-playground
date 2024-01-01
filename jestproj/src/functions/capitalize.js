export default function capitalize (to_capitalize) {
  for (let letter of to_capitalize) {
    console.log(String.fromCharCode(letter.charCodeAt(0) - 32))
  }

  return 0;
}