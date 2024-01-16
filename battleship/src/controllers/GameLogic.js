/* eslint-disable import/prefer-default-export */
// import { Player } from '../factories/Player';

export const GameLogic = (() => {
  const createAction = (action = {
    currentPlayer: null,
    targetPlayer: null,
    type: null,
    row: 0,
    col: 0,
    ship: null,
    options: {},
  }) => {
    const {
      currentPlayer,
      targetPlayer,
      type,
      row,
      col,
      ship,
      options,
    } = action;

    switch (type) {
      case 'attack':
        targetPlayer.getPlayerBoard().receiveAttack(row, col);
        break;
      case 'placement':
        currentPlayer.getPlayerBoard().placeShip(ship, row, col, options);
        break;
      default:
        break;
    }

    return null;
  };

  // currentGameBoard.placeShip(BattleShip, 0, 8, { isVertical: true });
  // currentGameBoard.placeShip(BattleShip2, 9, 3, { isVertical: false });

  return {
    createAction,

  };
})();
