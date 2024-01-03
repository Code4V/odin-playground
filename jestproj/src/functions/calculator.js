export const calculator = (...nums) => {
  
  const currentNumbers = nums.filter(e => {
    if (typeof e !== "number") return false;
    return true
  })

  const sum = () => {
    let i = 0;
    let result = 0;

    while (i < currentNumbers.length) {
      result = result + currentNumbers[i];
      i = i + 1;
    }

    return result;
  }

  const subtract = () => {
    let i = 1;
    let result = currentNumbers[0];
    
    while (i < currentNumbers.length) {
      result = result - currentNumbers[i] ;
      console.log(result)
      i = i + 1;
    }

    return result;
  }


  return {
    sum,
    subtract,
  }
}