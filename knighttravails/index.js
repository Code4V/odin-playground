console.log('Hello World!');

const adjacencyList = [ 
  [1, 6, 8],
  [0, 4, 6, 9],
  [4, 6],
  [4, 5, 8],
  [1, 2, 3, 5, 9],
  [3, 4],
  [0, 1, 2],
  [8, 9],
  [0, 3, 7],
  [1, 4, 7] 
];


let i = 0;

const edgeList = [ [0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [4, 5] ];

const adjMatrix = [

];

const vertices = edgeList.length;

for (let i = 0; i < edgeList.length ; i = i + 1) {
  console.log(edgeList[i]);

  var previousRow;
  console.log(previousRow)
  const newVertex = [];
  
  for (let j = 0; j < vertices ; j = j + 1) {
    if (edgeList[i][1] === j) newVertex.push(1);
    else newVertex.push(0);
    
    if( previousRow === edgeList[i][0]) i = i - 1;
  }
  
  previousRow = edgeList[i][0];

  adjMatrix.push(newVertex);
}

console.log(adjMatrix)
