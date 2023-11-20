console.log('test sd');


function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num-1);
}

function power(num, powerTo) {
  if (powerTo === 0) return 1;
  return num * power(num, powerTo-1);
}

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num-1);
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
  if (Object.values(haystack).includes(needle)) return true;
  
  console.log(haystack)
  // console.log(Object.values(haystack)[0])
  return contains(Object.values(haystack)[0], needle);
}

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
            }
        }
    }
}

console.log(all([1, 2, 9], (num) => num < 7));
console.log(sumRange(5));
console.log(power(2, 5));
console.log(factorial(6));
console.log(productOfArray([1, 2, 3]));
console.log(contains(nestedObject, 34))