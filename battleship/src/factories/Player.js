export const Player = (name) => {
  const playerName = name;
  let isReady = false;
  let playerBoard = null;
  let playerTurn = false;
  let haveWon = false;

  const getPlayerTurn = () => playerTurn;
  const setPlayerTurn = () => {
    console.log('Shifted the turn', playerName);
    playerTurn = !playerTurn;
  };

  const getName = () => playerName;

  const getReady = () => isReady;
  const setReady = () => {
    isReady = !isReady;
  };

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
    getReady,
    setReady,
  };
};
