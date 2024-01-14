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

  const markBoard = (row, col, options = { markWith: 'X' }) => {
    const { markWith } = options;
    gameBoard[row][col] = markWith;
  };

  const placeShip = (Ship, row, col, options = { isVertical: false }) => {
    let stepBackwards = 1;
    let columnPlacement = col;
    let rowPlacement = row;

    const shipLength = Ship.getLength();

    if ((shipLength + col) > 9) {
      columnPlacement = (columnPlacement - shipLength) + 1;
    }

    if ((shipLength + row) > 9 && options.isVertical) {
      rowPlacement = (rowPlacement - shipLength) + 1;
    }

    if (!options.isVertical) {
      for (let i = 0; i < Ship.getLength(); i += 1) {
        markBoard(rowPlacement, columnPlacement + i, { markWith: Ship });
      }

      return null;
    }

    for (let i = 0; i < Ship.getLength(); i += 1) {
      markBoard(rowPlacement + i, columnPlacement, { markWith: Ship });
    }

    return null;
  };

  const getGameBoard = () => gameBoard;

  return {
    gameBoard,
    getGameBoard,
    placeShip,
    receiveAttack,
  };
})();
