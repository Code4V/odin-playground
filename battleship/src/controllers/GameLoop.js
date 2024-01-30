import { DefaultPositions } from '../functions/defaultShipPositions';
import { GameStatus } from './GameStatus';

export const GameLoop = (playerA, playerB) => {
  const initializeGame = () => {
    playerA.setPlayerBoard(DefaultPositions().getBaseBoard());
    playerB.setPlayerBoard(DefaultPositions().getBaseBoard());

    GameStatus.setStatus('Boards initialized');
  };

  const startGame = () => {
    if (!playerA.getReady() && !playerB.getReady()) {
      return false;
    }
    playerA.setPlayerTurn();

    GameStatus.setStatus('Game started!');
    return true;
  };

  const playerAttack = (row, col, options = {
    currentPlayer: null,
    targetPlayer: null,
  }) => {
    const { currentPlayer, targetPlayer } = options;

    if (GameStatus.getStatus() !== 'Game started!') throw new Error('Game not started yet!!');
    if (!currentPlayer.getPlayerTurn()) throw new Error(`It's not ${currentPlayer.getName()}'s turn!`);

    if (targetPlayer.getPlayerBoard().receiveAttack(row, col)) {
      targetPlayer.getPlayerBoard().getGameBoard()[row][col].hit();
      targetPlayer.getPlayerBoard().getGameBoard()[row][col] = 'HIT';
    }
    currentPlayer.setPlayerTurn();
    targetPlayer.setPlayerTurn();

    return null;
  };

  return {
    initializeGame,
    startGame,
    playerAttack,

  };
};
