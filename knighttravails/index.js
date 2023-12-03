const AdjacencyList = require('./classes/AdjacencyList');
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

const matrix = new ChessBoard(8);
const adjacencyList = new AdjacencyList();

adjacencyList.newVertex();
adjacencyList.newVertex();
adjacencyList.newVertex();
adjacencyList.newVertex();
adjacencyList.newVertex();
adjacencyList.newVertex();
adjacencyList.newVertex();
adjacencyList.newVertex();

const edgeList = generateVertices`${10}`;

edgeList.forEach(e => {
  adjacencyList.addEdge(e[0], e[1]);
  matrix.addEdge(e[0], e[1])
})

console.table(
  adjacencyList.showList,
  );

console.table(
  adjacencyList.edges,
)

console.table(
  matrix.matrix,
)
  
for (let i = 0; i < matrix.size; i = i + 1) {
  for (let j = 0; j < matrix.size; j = j +1) {
    matrix.generatePossibleMoves(i, j);
  }
}

console.table(
  matrix.moves
)
