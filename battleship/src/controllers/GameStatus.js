export const GameStatus = (() => {
  let gameStatus = 'Waiting to start!';

  const getBoardStatus = (playerA, playerB) => ({
    [playerA.getName()]: playerA.getPlayerBoard().getGameBoard(),
    [playerB.getName()]: playerB.getPlayerBoard().getGameBoard(),
  });

  const getTurnStatus = (playerA, playerB) => (
    playerA.getPlayerTurn() ? `It's ${playerA.getName()}'s turn` : `It's ${playerB.getName()}'s turn`
  );

  const getStatus = () => gameStatus;
  const setStatus = (newStatus) => {
    gameStatus = newStatus;
  };

  return {
    getStatus,
    setStatus,
    getBoardStatus,
    getTurnStatus,
  };
})();
