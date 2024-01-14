export const Player = () => {
  let playerTurn = false;

  const getPlayerTurn = () => playerTurn;
  const setPlayerTurn = () => {
    playerTurn = !playerTurn;
  };

  return {
    getPlayerTurn,
    setPlayerTurn,
  };
};
