function createMatrix(...vertices) {
  const sizeOfMatrix = parseInt(vertices[1] ?? vertices, 10);
  const matrix = [];
  for (let i = 0; i < sizeOfMatrix; i = i + 1) {
    const row = [];
    for (let j = 0; j < sizeOfMatrix; j = j + 1) {
      row.push(0);
    }
    matrix.push(row);
  };
  
  return matrix;
}

function generateVertices(...vertices) {
  console.log(vertices)
  const numberOfVertices = parseInt(vertices[1] ?? vertices, 10);
  const verticesList = [];

  for (let i = 0; i < numberOfVertices; i = i + 1) {
    const newVertex = [];
    newVertex[0] = Math.round(Math.random() * 7);
    newVertex[1] = Math.round(Math.random() * 7);

    while (newVertex[0] === newVertex[1]) {
      newVertex[1] = Math.round(Math.random() * 7);
    }
    
      verticesList.push(newVertex);
  }

  return verticesList;
}


// const adjacencyList = [
//   [1, 6, 8],
//   [0, 4, 6, 9],
//   [4, 6],
//   [4, 5, 8],
//   [1, 2, 3, 5, 9],
//   [3, 4],
//   [0, 1, 2],
//   [8, 9],
//   [0, 3, 7],
//   [1, 4, 7]
// ];

let i = 0;

const edgeLista = [
  [0, 1], 
  [0, 2],  
  [1, 3], 
  [1, 5], 
  [2, 1],  
  [2, 3],  
  [2, 5],
  [2, 4],  
  [3, 5], 
  [4, 5],
  [0, 10]
];


const edgeList = generateVertices`${20}`;


const mapped = edgeList.map(e => {
  if (e[0] > e[1])
  return e[0];
return e[1];
}).sort((a, b) => a - b);

const vertices = mapped[mapped.length - 1] + 1;

const adjacencyList = [];

let it = 0;
do {
  adjacencyList.push([]);
  it = it + 1;
} while (it < vertices);


for (let i = 0; i < edgeList.length ; i = i + 1) {
  if (!adjacencyList[edgeList[i][0]].includes(edgeList[i][1])) {
    adjacencyList[edgeList[i][0]].push(edgeList[i][1]);
    adjacencyList[edgeList[i][1]].push(edgeList[i][0]);
  }
}

const adjacencyMatrix = createMatrix`${vertices}`;

for (let i = 0; i < edgeList.length; i = i + 1) {
  adjacencyMatrix[edgeList[i][0]][edgeList[i][1]] = ' ◼ ';
  adjacencyMatrix[edgeList[i][1]][edgeList[i][0]] = ' ◼ ';
};

console.group('EDGE LIST');
  console.table(edgeList);
console.groupEnd();

console.group('LIST AND MATRIX');
  console.table(adjacencyList);
  console.table(adjacencyMatrix);
console.groupEnd();