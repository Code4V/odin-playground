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

    POSSIBLE_MOVES.forEach(e => {
      if ((row + e[0]) > 7 || (row + e[0]) < 0) return;
      if ((col + e[1]) < 0 || (col + e[1] > 7)) return;

      matrixCopy[row + e[0]][col + e[1]] = 'P';
      moves.push([row + e[0], col + e[1]]);
    })


    // for(let i = 0; i < POSSIBLE_MOVES.length ; i = i + 1)
    // {
    //   if ((row + POSSIBLE_MOVES[i][0]) > 7 || (row + POSSIBLE_MOVES[i][0]) < 0) continue;
    //   if ((col + POSSIBLE_MOVES[i][1]) < 0 || (col + POSSIBLE_MOVES[i][1] > 7)) continue;

    //   matrixCopy[row + POSSIBLE_MOVES[i][0]][col + POSSIBLE_MOVES[i][1]] = 'P';
    //   moves.push([row + POSSIBLE_MOVES[i][0], col + POSSIBLE_MOVES[i][1]]);
    // }

    this.#movesList.push(moves);
    // console.table(moves)
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

    paths.push([])
    queueArray.push(start)

    // this.#movesList[this.#movesList.length - 1].forEach(e => queueArray.push(e));
    // return queueArray;
    while (queueArray.length != 0) {
      currentNode = queueArray.shift();

      if(currentNode == null) continue
      
      // console.log(queueArray, 'CURRENT')
      
      // if((visited.map(e => {
      //   return e.map((el, i) => {
      //     if (el === currentNode[i]) return true;
      //     return false;
      //   }).includes(false);
      // })).includes(false) === true) continue;
      let nextMoves = this.generatePossibleMoves(currentNode[0], currentNode[1]);
      const test = {test: 'test123', test2: 'test211'}
      
      for (let moves in nextMoves) {
        // console.log(nextMoves[moves])
        if(!(visited.map(e => {
          if (e[0] === currentNode[0] && e[1] === currentNode[1]) return true;
          return false;
        }).includes(true))) {
          // continue;
          nextMoves.forEach(e => queueArray.push(e));
          visited.push(currentNode);
          paths[moves].push(currentNode);
        }
      }
      // console.log('\n')
      // for (let i = 0; i < nextMoves.length ; i = i + 1) {
      //   if(visited.map(e => {
      //     if (e[0] === currentNode[0] && e[1] === currentNode[1]) return true;
      //     return false;
      //   }).includes(true)) {
      //     continue;
      //   }
      //   nextMoves.forEach(e => queueArray.push(e));
      //   visited.push(currentNode);
      //   paths[i].push(currentNode);
      // }

      // this.generatePossibleMoves(currentNode[0], currentNode[1]).forEach(e => queueArray.push(e));
      
      // if(currentNode)
      

      if (this.moves[this.moves.length - 1].map((e) => {
        if (e[0] === goal[0] && e[1] === goal[1]) return true;
        return false;
      }).includes(true)) {
        console.log(currentNode, '\n') 
        continue; 
      }
      
    }

  console.log(paths)
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