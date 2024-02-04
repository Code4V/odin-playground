import { Gameboard } from '../factories/Gameboard';
import { Ship } from '../factories/Ship';

export const DefaultPositions = () => {
  const shipsToBePlaced = [
    Ship('Patrol'),
    Ship('Cruiser'),
    Ship('BattleShip'),
    Ship('Carrier'),
  ];

  const BaseBoard = Gameboard();

  const defaultGameBoard = (() => {
    shipsToBePlaced.forEach((ship) => {
      const BOARD_LIMIT = 9;
      let isPlaced = false;
      while (!isPlaced) {
        const randomRow = Math.round(Math.random() * BOARD_LIMIT);
        const randomCol = Math.round(Math.random() * BOARD_LIMIT);
        const randomDirection = Math.round(Math.random() * 1) > 0;

        BaseBoard.setPlayerShips(ship, randomRow, randomCol);

        // BaseBoard.placeShip(Ship('Cruiser'), 3, 5, { isVertical: true });

        if (BaseBoard.placeShip(
          ship,
          randomRow,
          randomCol,
          { isVertical: randomDirection },
        )) isPlaced = true;
      }
    });
  })();

  const singleTestShip = () => {
    const TEST_ROW = 2;
    const TEST_COL = 5;
    const testShip = shipsToBePlaced[1];

    BaseBoard.resetBoard();

    BaseBoard.setPlayerShips(testShip, TEST_ROW, TEST_COL);
    BaseBoard.placeShip(testShip, TEST_ROW, TEST_COL);

    return BaseBoard;
  };

  const getBaseBoard = () => BaseBoard;

  return {
    defaultGameBoard,
    getBaseBoard,
    singleTestShip,
  };
};
