export const Gameboard = () => {
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

  const playerShips = new Map();

  const markBoard = (row, col, options = { markWith: 'X', forceMark: false }) => {
    const { markWith, forceMark } = options;

    if (gameBoard[row][col] !== 0 && !forceMark) return false;

    gameBoard[row][col] = markWith;
    return true;
  };

  const receiveAttack = (row, col) => {
    if (typeof gameBoard[row][col] === 'object') {
      // gameBoard[row][col].hit();
      // markBoard(row, col, { markWith: 'HIT!' });
      return true;
    }
    if (gameBoard[row][col] !== 0) return false;

    markBoard(row, col);

    return null;
  };

  const checkTilesForShips = (row, col) => {
    if (gameBoard[row - 1] === undefined
    || gameBoard[row + 1] === undefined) return false;

    if (gameBoard[row][col + 1] === undefined
    || gameBoard[row][col - 1] === undefined) return false;

    if (typeof gameBoard[row - 1][col - 1] === 'object'
    || typeof gameBoard[row][col - 1] === 'object'
    || typeof gameBoard[row + 1][col - 1] === 'object'
    || typeof gameBoard[row - 1][col + 1] === 'object'
    || typeof gameBoard[row][col + 1] === 'object'
    || typeof gameBoard[row + 1][col + 1] === 'object'
    || typeof gameBoard[row - 1][col] === 'object'
    || typeof gameBoard[row + 1][col] === 'object'
    ) return true;

    if (typeof gameBoard[row][col] === 'object') return true;

    return false;
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
        if (checkTilesForShips(
          rowPlacement,
          columnPlacement + i,
        )) return false;
      }

      for (let i = 0; i < Ship.getLength(); i += 1) {
        markBoard(rowPlacement, columnPlacement + i, { markWith: Ship });
      }

      return true;
    }

    for (let i = 0; i < Ship.getLength(); i += 1) {
      if (checkTilesForShips(
        rowPlacement + i,
        columnPlacement,
      )) return false;
    }

    for (let i = 0; i < Ship.getLength(); i += 1) {
      markBoard(rowPlacement + i, columnPlacement, { markWith: Ship });
    }

    return true;
  };

  const removeShip = (row, col, options = { isVertical: false }) => {
    if (typeof gameBoard[row][col] !== 'object') throw new Error('Not a ship!');

    const shipLength = gameBoard[row][col].getLength();
    const { isVertical } = options;

    let i = isVertical ? row : col;
    let shipBase;

    if (!isVertical) {
      while (typeof gameBoard[row][i] === 'object') {
        if (gameBoard[row][i]) shipBase = i;
        i -= 1;
      }
      for (let j = 0; j < shipLength; j += 1) {
        markBoard(row, shipBase + j, { markWith: 0, forceMark: true });
      }
    } else {
      while (typeof gameBoard[i][col] === 'object') {
        if (gameBoard[i][col]) shipBase = i;
        i -= 1;
      }
      for (let j = 0; j < shipLength; j += 1) {
        markBoard(shipBase + j, col, { markWith: 0, forceMark: true });
      }
    }
  };

  const getGameBoard = () => gameBoard;

  const getPlayerShips = () => playerShips;
  const setPlayerShips = (Ships, row, col) => {
    playerShips.set(Ships.getType(), {
      Ships,
      row,
      col,
    });
  };

  return {
    gameBoard,
    getGameBoard,
    placeShip,
    receiveAttack,
    removeShip,
    getPlayerShips,
    setPlayerShips,
  };
};
