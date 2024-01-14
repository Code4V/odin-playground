export const Gameboard = (() => {
  const gameBoard = (() => {
    const matrix = [];

    for (let i = 0; i < 10; i += 1) {
      const newRow = [];
      for (let j = 0; j < 10; j += 1) {
        newRow.push(0);
      }
      matrix.push(newRow);
    }

    return matrix;
  })();

  const receiveAttack = (row, col) => {
    if (gameBoard[row][col] === 1) return false;

    if (typeof gameBoard[row][col] === 'object') {
      // gameBoard[row][col].hit();
      // gameBoard[row][col] = 'X';

      return true;
    }

    gameBoard[row][col] = 1;
    return null;
  };

  const placeShip = (Ship, row, col, options = { isVertical: false }) => {
    const shipInitial = Ship.getType()[0];
    let stepBackwards = 1;

    for (let i = 0; i < Ship.getLength(); i += 1) {
      if (options.isVertical) {
        if (gameBoard[row + i] === undefined) {
          gameBoard[row - stepBackwards][col] = Ship;
          stepBackwards += 1;
          continue;
        }

        gameBoard[row + i][col] = Ship;
      } else {
        if (gameBoard[row][col + i] === undefined) {
          gameBoard[row][col - stepBackwards] = Ship;
          stepBackwards += 1;
          continue;
        }

        gameBoard[row][col + i] = Ship;
      }
    }
  };

  const getGameBoard = () => gameBoard;

  return {
    gameBoard,
    getGameBoard,
    placeShip,
    receiveAttack,
  };
})();
