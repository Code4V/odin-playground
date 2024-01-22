/* eslint-disable import/prefer-default-export */

import { GameStatus } from './GameStatus';

export const GameLogic = (() => {
  // const placementRules = (row, col) => {

  // };
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

    if (GameStatus.getStatus() !== 'Game started') throw new Error('Game not started yet!!');
    if (!currentPlayer.getPlayerTurn()) return false;

    switch (type) {
      case 'attack':
        if (targetPlayer.getPlayerBoard().receiveAttack(row, col)) {
          targetPlayer.getPlayerBoard().getGameBoard()[row][col].hit();
          targetPlayer.getPlayerBoard().getGameBoard()[row][col] = 'HIT';
        }
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
