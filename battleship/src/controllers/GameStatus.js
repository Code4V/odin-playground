import { Gameboard } from '../factories/Gameboard';

export const GameStatus = (playerA, playerB) => {
  let gameStatus = 'Waiting to start!';

  const initializeGame = () => {
    playerA.setPlayerBoard(Gameboard());
    playerB.setPlayerBoard(Gameboard());

    gameStatus = 'Boards initialized';
  };

  const startGame = () => {
    if (!playerA.getReady() && !playerB.getReady()) {
      return false;
    }

    gameStatus = 'Game started';
    return true;
  };

  const getBoardStatus = () => ({
    [playerA.getName()]: playerA.getPlayerBoard().getGameBoard(),
    [playerB.getName()]: playerB.getPlayerBoard().getGameBoard(),
  });

  const getStatus = () => gameStatus;
  const setStatus = (newStatus) => {
    gameStatus = newStatus;
  };

  return {
    getStatus,
    setStatus,
    getBoardStatus,
    initializeGame,
    startGame,
  };
};
