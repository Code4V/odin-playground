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

const cbMatrix = new ChessBoard(8);

console.log(
  {
    test_one: cbMatrix.knightMoves([0,0], [7, 7]),
    test_two: cbMatrix.knightMoves([0,0], [3,3]),
    test_three: cbMatrix.knightMoves([3,3], [0,0]),
  }
);
