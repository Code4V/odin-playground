import { Gameboard } from '../factories/Gameboard';
import { Ship } from '../factories/Ship';

export const DefaultPositions = () => {
  const shipsToBePlaced = [
    Ship('Patrol'),
    Ship('Patrol'),
    Ship('Cruiser'),
    Ship('BattleShip'),
    Ship('Carrier'),
  ];

  const BaseBoard = Gameboard();

  const DefaultGameBoard = (() => {
    shipsToBePlaced.forEach((ship) => {
      let isPlaced = false;
      while (!isPlaced) {
        const randomRow = Math.round(Math.random() * 9);
        const randomCol = Math.round(Math.random() * 9);
        const randomDirection = Math.round(Math.random() * 1) > 0;

        if (BaseBoard.placeShip(
          ship,
          randomRow,
          randomCol,
          { isVertical: randomDirection },
        )) isPlaced = true;
      }
    });
  })();

  const getBaseBoard = () => BaseBoard;

  return {
    DefaultGameBoard,
    getBaseBoard,
  };
};
