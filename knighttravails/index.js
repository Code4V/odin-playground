const AdjacencyList = require('./classes/AdjacencyList');
const Matrix = require('./classes/AdjacencyMatrix');
const ChessBoard = require('./classes/ChessBoard');
function generateVertices(...vertices) {
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
const matrix = new Matrix(8);
const cbMatrix = new ChessBoard(8);
const adjacencyList = new AdjacencyList();

const edgeList = generateVertices`${10}`;

const edgeListMan = [
  [0,1], [1,2], [1,3], [2, 3], [2,5], [2, 7], [3,4], [4, 1],
]

edgeListMan.forEach(e => {
  // adjacencyList.addEdge(e[0], e[1]);
  // cbMatrix.addEdge(e[0], e[1]);
  matrix.addEdge(e[0], e[1], { isDirected: true })
});
console.group("\nMATRIX");

console.table(
  matrix.matrix
)

console.groupEnd();


console.table(
  adjacencyList.showList,
);

// cbMatrix.addEdge(2, 1)

// for (let i = 0; i < cbMatrix.size; i = i + 1) {
//   for (let j = 0; j < cbMatrix.size; j = j + 1) {
//     // adjacencyList.addEdge(i, j);
//     // cbMatrix.generatePossibleMoves(i, j);
//   }
// }
// console.table(
  // cbMatrix.generatePossibleMoves(0, 5);
// )

const goal = [0, 1];
const start = [0, 1];

console.log(start.map((e, i)=> {
  if (e === goal[i]) return true;
  return false;
}).includes(false));

// console.table(
  // cbMatrix.nextMove(1, 7)
// )

// console.table(
  // cbMatrix.nextMove(3, 6)
// )

// cbMatrix.moves.forEach(e => console.table(e.showList))
console.log(
  cbMatrix.bfs([0,0], [7, 7])
);

// cbMatrix.generatePossibleMoves(7, 7)

console.table(
  // cbMatrix.cbMatrix
)

console.table(
  // cbMatrix.moves
)
