export const Player = (name) => {
  const playerName = name;
  let playerBoard = null;
  let playerTurn = false;
  let haveWon = false;

  const getPlayerTurn = () => playerTurn;
  const setPlayerTurn = () => {
    playerTurn = !playerTurn;
  };

  const getName = () => playerName;

  const getWinStatus = () => haveWon;
  const setWinStatus = () => {
    haveWon = !haveWon;
  };

  const getPlayerBoard = () => playerBoard;
  const setPlayerBoard = (GameBoard) => {
    playerBoard = GameBoard;
  };

  return {
    getPlayerTurn,
    setPlayerTurn,
    getName,
    getWinStatus,
    setWinStatus,
    getPlayerBoard,
    setPlayerBoard,
  };
};
