export default function reverseString (to_reverse) {
  const reversed = [];
  for (let i = to_reverse.length ; i >= 1 ; i = i - 1) {
    reversed.push(to_reverse[i - 1])
  }

  return reversed.join('');
}