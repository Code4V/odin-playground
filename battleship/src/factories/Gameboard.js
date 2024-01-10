export const Gameboard = (() => {
  const gameBoard = (() => {
    const matrix = [];

    for ( let i = 0 ; i < 10 ; i = i + 1 ) {
      const newRow = [];
      for ( let j = 0 ; j < 10 ; j = j + 1 ) {
        newRow.push(0)
      }
      matrix.push(newRow)
    }

    return matrix;
  })();

  const receiveAttack = (row, col) => {
    if(gameBoard[row][col] === 1) return null;

    gameBoard[row][col] = 1;
    return null;
  }
  
  const placeShip = (Ship, row, col) => {
    for (let i = 0 ; i < Ship.getLength() ; i = i + 1){
      gameBoard[row][col + i] = 'P';
    }
  }

  const getGameBoard = () => gameBoard;

  return {
    gameBoard,
    getGameBoard,
    placeShip,
    receiveAttack,
  }
})();