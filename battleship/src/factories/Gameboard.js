export const Gameboard = (() => {
  const BOARD_TILES = 10;
  const gameBoard = (() => {
    const matrix = [];

    for (let i = 0; i < BOARD_TILES; i += 1) {
      const newRow = [];
      for (let j = 0; j < BOARD_TILES; j += 1) {
        newRow.push(0);
      }
      matrix.push(newRow);
    }

    return matrix;
  })();

  const markBoard = (row, col, options = { markWith: 'X' }) => {
    const { markWith } = options;
    gameBoard[row][col] = markWith;
  };

  const receiveAttack = (row, col) => {
    if (gameBoard[row][col] === 1) return false;

    if (typeof gameBoard[row][col] === 'object') {
      // gameBoard[row][col].hit();
      markBoard(row, col, { markWith: 'HIT!' });
      return true;
    }

    markBoard(row, col);

    return null;
  };

  const placeShip = (Ship, row, col, options = { isVertical: false }) => {
    let columnPlacement = col;
    let rowPlacement = row;

    const shipLength = Ship.getLength();

    if ((shipLength + col) > BOARD_TILES) {
      columnPlacement -= (columnPlacement + shipLength) % 10;
    }

    if ((shipLength + row) > BOARD_TILES && options.isVertical) {
      rowPlacement -= (rowPlacement + shipLength) % 10;
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
