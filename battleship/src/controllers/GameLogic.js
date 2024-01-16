/* eslint-disable import/prefer-default-export */
// import { Player } from '../factories/Player';

export const GameLogic = (() => {
  const createAction = (action = { type: null }) => {
    const {
      currentPlayer,
      target,
      type,
      row,
      col,
      ship,
      options,
    } = action;

    switch (type) {
      case 'attack':
        target.getGameBoard().receiveAttack(row, col);
        break;
      case 'placement':
        currentPlayer.getGameBoard().placeShip(ship, row, col, options);
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
