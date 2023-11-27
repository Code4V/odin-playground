function mergeSort(arr = []) {
  if (arr.length === 1) return arr;
  
  const sortedArray = [];
  const leftArrayNew = mergeSort(arr.splice(0, Math.round(arr.length / 2)));
  const rightArrayNew = mergeSort(arr);

  while (leftArrayNew.length != 0 && rightArrayNew.length != 0 ) {
    if (leftArrayNew[0] <= rightArrayNew[0]) {
      sortedArray.push(leftArrayNew[0]);
      leftArrayNew.shift();
    } else if (leftArrayNew[0] > rightArrayNew[0]) {
      sortedArray.push(rightArrayNew[0]);
      rightArrayNew.shift();
    }
  }

  return sortedArray.concat(leftArrayNew, rightArrayNew);
}

console.log(JSON.stringify({
  Numbers: {
    unsorted: [1,4,2,1,1,1,4,5,6,7], 
    sorted: mergeSort([1,4,2,1,1,1,4,5,6,7]),
    },
  Words: {
    unsorted: ['te', 'azd', 'axdw', 'qwe', 'z'],
    sorted: mergeSort(['te', 'azd', 'axdw', 'qwe', 'z']),
  },
}, null, 2));