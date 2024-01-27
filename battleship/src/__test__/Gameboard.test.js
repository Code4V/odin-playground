/* eslint-env jest */
import { Gameboard } from '../factories/Gameboard';
import { Ship } from '../factories/Ship';

describe('Testing of the gameboard', () => {
  const testBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const gameBoard = Gameboard();
  const testShip = Ship();

  it('Initiation of board must have 10 rows and columns', () => {
    expect(gameBoard.getGameBoard()).toEqual(testBoard);
  });

  it('hit function replaces the tile', () => {
    const [TARGET_ONE, TARGET_TWO] = [1, 2];
    gameBoard.receiveAttack(TARGET_ONE, TARGET_TWO);
    testBoard[TARGET_ONE][TARGET_TWO] = 'X';

    expect(gameBoard.getGameBoard()).toEqual(testBoard);
  });

  it('placement of ship', () => {
    expect(gameBoard.placeShip(testShip, 0, 0)).toBeTruthy();
  });

  it('placement of ship vertically', () => {
    expect(gameBoard.placeShip(testShip, 6, 5, { isVertical: true })).toBeTruthy();
  });
});
