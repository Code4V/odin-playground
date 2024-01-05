export const analyzeArray = (array = []) => {
  if (array.length === 0) return null;
  let length = 0; 
  let min = array[0];
  let max = array[0];
  let average = 0;

  while (array[length] !== undefined) {
    if (array[length] < min) {
      min = array[length];
    }

    if (array[length] > max) {
      max = array[length];
    }

    average = average + array[length];

    length = length + 1;
  }

  average = Math.round(average / length);
  
  return {
    average,
    min,
    max,
    length,
  }

}