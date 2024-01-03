export const calculator = (...nums) => {

  const currentNumbers = nums
    .flat()
    .filter(e => {
      if (typeof e !== "number") return false;
      return true
  })
  
  let result = currentNumbers[0] ?? 0;
  
  const sum = () => {
    let i = 1;

    while (i < currentNumbers.length) {
      result = result + currentNumbers[i];
      i = i + 1;
    }

    return result;
  }

  const subtract = () => {
    let i = 1;
    
    while (i < currentNumbers.length) {
      result = result - currentNumbers[i] ;
      i = i + 1;
    }

    return result;
  }


  const multiply = () => {
    let i = 1;
    
    while (i < currentNumbers.length) {
      result = result * currentNumbers[i] ;
      i = i + 1;
    }

    return result;
  }

  const divide = () => {
    let i = 1;
    
    while (i < currentNumbers.length) {
      result = result / currentNumbers[i] ;
      i = i + 1;
    }

      return result;
  }


  return {
    sum,
    subtract,
    multiply,
    divide
  }
}