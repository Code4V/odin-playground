function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function power(num, powerTo) {
  if (powerTo === 0) return 1;
  return num * power(num, powerTo - 1);
}

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

function all(arr = [], callback) {
  // if (arr.length - 1 !==0) return all(arr.length - 1, callback);
  if (arr.length === 0) return true;
  if (!callback(arr[0])) return false;

  arr.shift();
  return all(arr, callback);
}

function productOfArray(arr = []) {
  if (arr[0] === undefined) return 1;
  return arr.shift() * productOfArray(arr);
}

function contains(haystack, needle) {
  if (Object.values(haystack)[0] === undefined) return false;
  for (var key in haystack) {
    if (Object.values(haystack[key]).includes(needle) || haystack[key] === needle)
      return true
  }
  return contains(Object.values(haystack)[0], needle);
}

function totalIntegers(arr = []) {
  if (arr.length === 0) return 0;
  let totalInt = 0;
  if (Array.isArray(arr[0])) totalInt = totalInt + totalIntegers(arr[0]);
  if (Number.isInteger(arr[0])) totalInt = totalInt + 1;
  arr.shift();
  return totalInt + totalIntegers(arr);
}

function SumSquares(arr = []) {
  if (arr.length === 0) return 0;
  let totalSquare = 0;
  if (Array.isArray(arr[0])) totalSquare = totalSquare + SumSquares(arr[0]);
  if (Number.isInteger(arr[0])) totalSquare = arr[0] * arr[0];
  arr.shift();
  return totalSquare + SumSquares(arr);
}

function replicate(repetition, num) {
  if (repetition <= 0) return [];
  return [num].concat(replicate(repetition - 1, num));
}

function collatz(num) {
  var steps = 0;
  if (num == 1) return steps;
  if (num % 2 === 0) num = num / 2;
  else num = (3 * num) + 1;
  steps = steps + 1;
  return steps + collatz(num);
}

function fibonacci(num) {
  let currNum = 1;
  let prevNum = 0;
  let nexNum = 0;

  let fibArray = [];
  let i = 0;
  while (i < num) {
    fibArray.push(prevNum);
    nexNum = prevNum + currNum;
    prevNum = currNum;
    currNum = nexNum;

    i = i + 1;
  }
  return fibArray;
}

function fibsRec(num, currNum = 1, nextNum = 0, prevNum = 0) {
  if (num === 1) return [0];
  nextNum = prevNum + currNum;
  prevNum = currNum;
  currNum = nextNum;
  return [prevNum].concat(fibsRec(num - 1, currNum, nextNum, prevNum)).sort((a, b) => a - b);
}

function khan(num) {
  let arrayKhan = [];
  if (num < 2) {
    return num;
  } else {
    return arrayKhan.concat(khan(num - 2) + khan(num - 1));
  }
}

function multiplesOfThreeAndFive(limit = 1000) {
  if (limit === 0) return 0;

  limit = limit - 1;
  if (limit % 3 === 0 || limit % 5 === 0) {
    return limit = limit + multiplesOfThreeAndFive(limit);
  }

  return multiplesOfThreeAndFive(limit);
}

/**
 * Get array from user
 * Take array then half it to left and right
 * If left array length is more than 2
 *  Take array then half it to left and right
 *  If array length is 1 return array
 * 
 * 
 * 
 * 
 */
function mergeSort(arr = [], from = 'left') {
  if (arr.length === 1) return arr;

  let arrHalfSize = Math.round(arr.length / 2);
  let leftArr = arr.slice(0, arrHalfSize);
  let rightArr = arr.slice(arrHalfSize, arr.length);
  let temp = 0;

  const sortedArray = [];
  // sortedArray.concat(leftArrayNew)

  console.log(arr);

  // let i = 0, j = 0;
  const leftArrayNew = mergeSort(leftArr);
  const rightArrayNew = mergeSort(rightArr, 'right');
  
  console.table({
    arr,
    leftArrayNew,
    // leftArr,
    rightArrayNew,
    // rightArr,
    from
  })

  let i = 0;

  while (true) {
    // console.table({leftArrayNew,  rightArrayNew, rightLength: rightArrayNew.length});
    if (leftArrayNew.length === 0 || rightArrayNew.length === 0 ) return sortedArray;

    if (leftArrayNew[0] <= rightArrayNew[0]) {
      sortedArray.push(leftArrayNew[0]);
      leftArrayNew.shift();
      // console.log(leftArrayNewR
    } else if (leftArrayNew[0] > rightArrayNew[0]) {
      sortedArray.push(rightArrayNew[0]);
      rightArrayNew.shift();
    }
    i++;
    if ( i === 10 ) break;
  }
  // return sortedArray
  // sortedArr.push(arr);
  // console.log(
  //   arr
  // )

  // console.log(sortedArray)

  // return sortedArray;
}


console.log( 
mergeSort([4, 3,5,978,34, 1, 14])
);

// console.log(khan(6));
// console.log(fibsRec(8));
// console.log(fibonacci(8));

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2'
          }
        },
        thing2: {
          shoo: 34,
        }
      },
      stuff2: 'sheesh'
    },
  },
  data2: 'krak krak'
}

const arrayads = [
  [[5], 3, 5],
  0,
  2,
  ['foo'],
  [],
  [4, [5, 6]]
]

// console.log(all([1, 2, 49], (num) => num < 7));
// console.log(sumRange(5));
// console.log(power(2, 5));
// console.log(factorial(12));
// console.log(productOfArray([1, 2, 3]));
// console.log(contains(nestedObject, 'sheesh'))
// console.log(totalIntegers(arrayads))
// console.log(SumSquares([1, 3, 3, 3]))
// console.log(replicate(10, 123))