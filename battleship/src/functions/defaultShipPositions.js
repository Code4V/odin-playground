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
      let isPlaced = false;
      while (!isPlaced) {
        const randomRow = Math.round(Math.random() * 9);
        const randomCol = Math.round(Math.random() * 9);
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
    const testShip = shipsToBePlaced[1];

    BaseBoard.resetBoard();

    BaseBoard.placeShip(testShip, 2, 5);

    return BaseBoard;
  };

  const getBaseBoard = () => BaseBoard;

  return {
    defaultGameBoard,
    getBaseBoard,
    singleTestShip,
  };
};
