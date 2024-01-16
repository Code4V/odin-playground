import { Gameboard } from '../factories/Gameboard';

export const GameStatus = (playerA, playerB) => {
  playerA.setPlayerBoard(Gameboard());
  playerB.setPlayerBoard(Gameboard());

  const getStatus = () => ({
    [playerA.getName()]: playerA.getPlayerBoard().getGameBoard(),
    [playerB.getName()]: playerB.getPlayerBoard().getGameBoard(),
  });

  return {
    getStatus,
  };
};
