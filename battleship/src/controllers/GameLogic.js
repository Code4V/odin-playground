/* eslint-disable import/prefer-default-export */
import { Gameboard } from '../factories/Gameboard';
// import { Player } from '../factories/Player';

export const GameLogic = (() => {
  // const BattleShip = Ship('Carrier');
  // const BattleShip2 = Ship('Cruiser');

  // BattleShip.hit()

  const createAction = (action = { type: null }) => {
    const {
      type,
      row,
      col,
      ship,
      options,
    } = action;

    switch (type) {
      case 'attack':
        Gameboard.receiveAttack(row, col);
        break;
      case 'placement':
        Gameboard.placeShip(ship, row, col, options);
        break;
      default:
        break;
    }

    return null;
  };

  const getStatus = () => Gameboard.gameBoard;

  // Gameboard.placeShip(BattleShip, 0, 8, { isVertical: true });
  // Gameboard.placeShip(BattleShip2, 9, 3, { isVertical: false });

  return {
    createAction,
    getStatus,

  };
})();
