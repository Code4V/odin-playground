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

    GameStatus.setStatus('Game started!');
    return true;
  };

  return {
    initializeGame,
    startGame,
  };
};
