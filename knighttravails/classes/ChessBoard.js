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
    
    const POSSIBLE_MOVES = [
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1],
      [2, 1],
      [1, 2], 
      [-1, 2],
      [-2, 1]
    ];


    for(let i = 0; i < POSSIBLE_MOVES.length ; i = i + 1)
    {
      if ((row + POSSIBLE_MOVES[i][0]) > 7 || (row + POSSIBLE_MOVES[i][0]) < 0) continue;
      if ((col + POSSIBLE_MOVES[i][1]) < 0 || (col + POSSIBLE_MOVES[i][1] > 7)) continue;

      matrixCopy[row + POSSIBLE_MOVES[i][0]][col + POSSIBLE_MOVES[i][1]] = 'P';
      moves.push([row + POSSIBLE_MOVES[i][0], col + POSSIBLE_MOVES[i][1]]);
    }

    this.#movesList.push(moves);
    console.table(moves)
    // console.table(this.#movesList[this.#movesList.length - 1])
    return moves;
  }

  nextMove(row, col)  {
    if (!this.#movesList[this.#movesList.length-1].findEdge(row, col)) {
      return 'Illegal Move';
    }

    return this.generatePossibleMoves(row, col)
  }

  bfs(start = [0,0], goal = [7, 7]) {
    const queueArray = [];
    const visited = [];
    const paths = [];
    let currentNode = start;

    paths.push([start])
    queueArray.push(start)

    // this.#movesList[this.#movesList.length - 1].forEach(e => queueArray.push(e));
    // return queueArray;
    while (queueArray.length != 0) {
      currentNode = queueArray.shift();

      if(currentNode == null) break
      
      // console.log(queueArray, 'CURRENT')
      
      // if((visited.map(e => {
      //   return e.map((el, i) => {
      //     if (el === currentNode[i]) return true;
      //     return false;
      //   }).includes(false);
      // })).includes(false) === true) continue;
      
      if(visited.map(e => {
        if (e[0] === currentNode[0] && e[1] === currentNode[1]) return true;
        return false;
      }).includes(true)) continue;
      
      // if(currentNode)
      
      this.generatePossibleMoves(currentNode[0], currentNode[1]).forEach(e => queueArray.push(e));

      if (this.moves[this.moves.length - 1].map((e) => {
        if (e[0] === goal[0] && e[1] === goal[1]) return true;
        return false;
      }).includes(true)) console.log('FOUND PATH');
      
      visited.push(currentNode);
    }

    console.table(visited)
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