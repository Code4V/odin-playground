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

  const DefaultGameBoard = () => {
    shipsToBePlaced.forEach((ships) => {
      const randomRow = Math.round(Math.random() * 9);
      const randomCol = Math.round(Math.random() * 9);

      BaseBoard.placeShip(ships, randomRow, randomCol);
    });
  };

  return {
    DefaultGameBoard,
  };
};
