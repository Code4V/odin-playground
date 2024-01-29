/* eslint-env jest */
import { GameLoop } from '../controllers/GameLoop';
import { Player } from '../factories/Player';

describe('GameLogic testing', () => {
  const playerA = Player('Test');
  const playerB = Player('Test Two');
  const gameLoop = GameLoop(playerA, playerB);

  it('initiation of two players and their boards', () => {
    gameLoop.initializeGame();

    [playerA, playerB].forEach((player) => {
      expect(player.getPlayerBoard()).not.toBeNull();
    });
  });

  it('game starts when both players are ready', () => {
    playerA.setReady();
    playerB.setReady();
    gameLoop.startGame();
    expect(playerA.getPlayerTurn()).toBeTruthy();
  });
});
