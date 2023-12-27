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

  nextMove(row, col) {
    if (!this.#movesList[this.#movesList.length - 1].findEdge(row, col)) {
      return 'Illegal Move';
    }

    return this.generatePossibleMoves(row, col)
  }

  bfs(start = [0, 0], goal = [7, 7]) {
    const queueArray = [];
    const visited = [];
    const paths = [];
    let currentNode = start;

    queueArray.push(start)
    
    // this.#movesList[this.#movesList.length - 1].forEach(e => queueArray.push(e));
    // return queueArray;
    while (queueArray.length != 0) {
      console.log(queueArray)
      currentNode = queueArray.shift();
      // if(currentNode == null) continue

      // console.log(queueArray, 'CURRENT')

      // if((visited.map(e => {
      //   return e.map((el, i) => {
      //     if (el === currentNode[i]) return true;
      //     return false;
      //   }).includes(false);
      // })).includes(false) === true) continue;
      if (
        visited.some(e => e[0] === currentNode[0] && e[1] === currentNode[1])
      ) {
        continue;
      }

      visited.push(currentNode);
      paths.push(currentNode);
      let nextMoves = this.generatePossibleMoves(currentNode[0], currentNode[1]);
      for (let moves of nextMoves) {
        // console.log(moves)
        if (
          visited.some(e => e[0] === moves[0] && e[1] === moves[1])
        ) {
          continue;
        }
        nextMoves.forEach(e => queueArray.push(e));
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

  bfs2(start = [0, 0], goal = [7, 7]) {
  const queueArray = [];
  const visited = [];
  const paths = [];
  let currentNode = start;

  queueArray.push([start]);

  while (queueArray.length !== 0) {
    const currentPath = queueArray.shift();
    currentNode = currentPath[currentPath.length - 1];

    // console.log(queueArray)

    if (
      visited.some(
        (e) => e[0] === currentNode[0] && e[1] === currentNode[1]
      )
    ) {
      continue;
    }

    visited.push(currentNode);

    let nextMoves = this.generatePossibleMoves(currentNode[0], currentNode[1]);

    for (let move of nextMoves) {
      if (
        visited.some(
          (e) => e[0] === move[0] && e[1] === move[1]
        )
      ) {
        continue;
      }

      // Create a new path by copying the current path and adding the move
      const newPath = [...currentPath, move];
      queueArray.push(newPath);

      // console.log(visited)

      // Check if the move reaches the goal
      if (move[0] === goal[0] && move[1] === goal[1]) {
        console.log("Goal reached:", newPath, "\n");
        return newPath;
        // paths.push(newPath);
      }
    }
  }
  // console.log(paths)
  console.log("Goal not reached.");
  return null;
}


  get moves() {
    return this.#movesList;
  }

  get pastMoves() {
    return this.#pastMoves;
  }

  clearBoard() {

  }
}