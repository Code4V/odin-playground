const AdjacencyList = require("./AdjacencyList");
const AdjacencyMatrix = require("./AdjacencyMatrix");

/**
 * @property {AdjacencyList} movesList
 */
module.exports = class ChessBoard extends AdjacencyMatrix {
  #movesList = [];
  #pastMoves = [];

  constructor(boardSize) {
    super(boardSize);
  }

  generatePossibleMoves(row, col) {
    // const matrixCopy = new AdjacencyMatrix(8).matrix;
    const matrixCopy = super.matrix;

    matrixCopy[row][col] = 'C';

    const moves = [];

    this.#pastMoves.push([row, col]);

    // this.#movesList.push(new AdjacencyList());

    if (matrixCopy[row + 2] != undefined) {
      if (!(col - 1 < 0)) {
        matrixCopy[row + 2][col - 1] = 'P';

        moves.push([row + 2, col - 1])
        
        // this.#movesList[this.#movesList.length - 1].addEdge(row+2, col-1)
      }

      if (!(col + 1 > 7)) {
        matrixCopy[row + 2][col + 1] = 'P';

        moves.push([row + 2, col + 1]);

        // this.#movesList[this.#movesList.length - 1].addEdge(row+2, col+1);

      }
      }

    if (matrixCopy[row + 1] != undefined) {
      if (!(col + 2 > 7)) {
        matrixCopy[row + 1][col + 2] = 'P';

        moves.push([row + 1, col + 2])

        // this.#movesList[this.#movesList.length - 1].addEdge(row+1, col+2);
      }

      if (!(col - 2 < 0)) {
        matrixCopy[row + 1][col - 2] = 'P';

        moves.push([row + 1, col - 2])
        // this.#movesList[this.#movesList.length - 1].addEdge(row+1, col-2);
      }
    }

    if (matrixCopy[row - 2] != undefined) {
      if (!(col - 1 < 0)) {
        matrixCopy[row - 2][col - 1] = 'P';

        moves.push([row - 2, col - 1])
        // this.#movesList[this.#movesList.length - 1].addEdge(row-2, col-1);
      }

      if (!(col + 1 > 7)) {
        matrixCopy[row - 2][col + 1] = 'P';

        moves.push([row - 2, col + 1])
        // this.#movesList[this.#movesList.length - 1].addEdge(row-2, col+1);
      }
    }

    if (matrixCopy[row - 1] != undefined) {
      if (!(col - 2 < 0)) {
        matrixCopy[row - 1][col - 2] = 'P';
        moves.push([row - 1, col - 2])

        // this.#movesList[this.#movesList.length - 1].addEdge(row-1, col-2);
      }

      if (!(col + 2 > 7)) {
        matrixCopy[row - 1][col + 2] = 'P';

        moves.push([row - 1, col + 2])

        // this.#movesList[this.#movesList.length - 1].addEdge(row-1, col+2);
      }
    }

    this.#movesList.push(moves);

    console.table(super.matrix)
    return this.#movesList;
  }

  nextMove(row, col)  {
    if (!this.#movesList[this.#movesList.length-1].findEdge(row, col)) {
      return 'Illegal Move';
    }

    return this.generatePossibleMoves(row, col)
  }

  bfs() {
    const queueArray = [];


  }

  get moves () {
    return this.#movesList;
  }

  get pastMoves () {
    return this.#pastMoves;
  }

  clearBoard() {

  }
}