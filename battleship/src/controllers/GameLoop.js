// import { Gameboard } from '../factories/Gameboard';
import { DefaultPositions } from '../functions/defaultShipPositions';
import { GameStatus } from './GameStatus';

export const GameLoop = (() => {
  let playerA;
  let playerB;

  const initializeGame = () => {
    playerA.setPlayerBoard(DefaultPositions().getBaseBoard());
    playerB.setPlayerBoard(DefaultPositions().singleTestShip());

    // displayScreen.append(Gameboard(playerA), Gameboard(playerB));

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

  const checkWin = () => {
    const playerAShipsArray = Array
      .from(
        playerA
          .getPlayerBoard()
          .getPlayerShips(),
      );

    const playerBShipsArray = Array
      .from(
        playerB
          .getPlayerBoard()
          .getPlayerShips(),
      );

    if (!playerBShipsArray.some((ships) => ships[1].Ships.getHealth() !== 0)) {
      playerA.setWinStatus();
      GameStatus.setStatus(`${playerA.getName()} Won!`);
    }

    if (!playerAShipsArray.some((ships) => ships[1].Ships.getHealth() !== 0)) {
      playerB.setWinStatus();
      GameStatus.setStatus(`${playerB.getName()} Won!`);
    }

    return null;
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

      checkWin();
      if (playerA.getWinStatus()) return `${playerA.getName()} won!`;
      if (playerB.getWinStatus()) return `${playerB.getName()} won!`;

      return null;
    }
    currentPlayer.setPlayerTurn();
    targetPlayer.setPlayerTurn();

    return null;
  };

  const setPlayers = (firstPlayer, secondPlayer) => {
    playerA = firstPlayer;
    playerB = secondPlayer;
  };

  const getFirstPlayer = () => playerA;
  const getSecondPlayer = () => playerB;
  const getTargetPlayer = () => {
    const turnBy = playerA.getPlayerTurn() ? playerA : playerB;
    return turnBy;
  };

  return {
    initializeGame,
    startGame,
    playerAttack,
    setPlayers,
    getFirstPlayer,
    getSecondPlayer,
    getTargetPlayer,
  };
})();
