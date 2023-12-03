const AdjacencyMatrix = require("./AdjacencyMatrix");

module.exports = class ChessBoard extends AdjacencyMatrix {
  #movesList = [];
  constructor(boardSize) {
    super(boardSize);
  }

  generatePossibleMoves(row, col) {
    const matrixCopy = new AdjacencyMatrix(8).matrix;

    matrixCopy[row][col] = 'C';
    const moves = [];

    moves.push([row, col])

    if (matrixCopy[row + 2] != undefined) {
      if (!(col - 1 < 0)) {
        matrixCopy[row + 2][col - 1] = 'P';

        moves.push([row + 2, col - 1])
      }

      if (!(col + 1 > 7)) {
        matrixCopy[row + 2][col + 1] = 'P';

        moves.push([row + 2, col + 1])
      }

    }

    if (matrixCopy[row + 1] != undefined) {
      if (!(col + 2 > 7)) {
        matrixCopy[row + 1][col + 2] = 'P';

        moves.push([row + 1, col + 2])
      }

      if (!(col - 2 < 0)) {
        matrixCopy[row + 1][col - 2] = 'P';

        moves.push([row + 1, col - 2])
      }
    }

    if (matrixCopy[row - 2] != undefined) {
      if (!(col - 1 < 0)) {
        matrixCopy[row - 2][col - 1] = 'P';

        moves.push([row - 2, col - 1])
      }

      if (!(col + 1 > 7)) {
        matrixCopy[row - 2][col + 1] = 'P';

        moves.push([row - 2, col + 1])
      }
    }

    if (matrixCopy[row - 1] != undefined) {
      if (!(col - 2 < 0)) {
        matrixCopy[row - 1][col - 2] = 'P';
        moves.push([row - 1, col - 2])

      }

      if (!(col + 2 > 7)) {
        matrixCopy[row - 1][col + 2] = 'P';

        moves.push([row - 1, col + 2])
      }
    }

    this.#movesList.push(moves);

    return matrixCopy;
  }

  get moves () {
    return this.#movesList;
  }

  clearBoard() {

  }
}