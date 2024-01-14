/* eslint-disable import/prefer-default-export */
import { Gameboard } from '../factories/Gameboard';
import { Ship } from '../factories/Ship';
import { Player } from '../factories/Player';

export const GameLogic = (() => {
  const BattleShip = Ship('Carrier');
  const BattleShip2 = Ship('Cruiser');

  // BattleShip.hit()

  const createAction = (action = { type: null }) => {
    const { type } = action;
    switch (Object.keys(type)[0]) {
      case 'attack':
        const { row, col } = type.attack;

        Gameboard.receiveAttack(row, col);
        break;
      default:
        break;
    }

    return null;
  };

  const getStatus = () => Gameboard.gameBoard;

  Gameboard.placeShip(BattleShip, 0, 8, { isVertical: true });
  Gameboard.placeShip(BattleShip2, 9, 3, { isVertical: false });

  return {
    createAction,
    getStatus,

  };
})();
