// import { Gameboard } from '../factories/Gameboard';
import { DefaultPositions } from '../functions/defaultShipPositions';
import { GameStatus } from './GameStatus';

const GameLoop = (() => {
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

  const getTargetPlayer = () => {
    const turnBy = !playerA.getPlayerTurn() ? playerA : playerB;
    return turnBy;
  };

  const playerAttack = (row, col, options = {
    currentPlayer: null,
    targetPlayer: null,
  }) => {
    const currentPlayer = getTargetPlayer();
    const targetPlayer = playerA.getPlayerTurn() ? playerA : playerB;

    console.log(getTargetPlayer().getName(), '<= target player');

    console.log(currentPlayer.getName());
    if (GameStatus.getStatus() !== 'Game started!') throw new Error('Game not started yet!!');
    if (!targetPlayer.getPlayerTurn()) throw new Error(`It's not ${currentPlayer.getName()}'s turn!`);

    if (targetPlayer.getPlayerBoard().receiveAttack(row, col)) {
      targetPlayer.getPlayerBoard().getGameBoard()[row][col].hit();
      targetPlayer.getPlayerBoard().getGameBoard()[row][col] = 'HIT';

      console.log('Passed here!');

      checkWin();
      if (playerA.getWinStatus()) GameStatus.setStatus(`${playerA.getName()} won!`);
      if (playerB.getWinStatus()) GameStatus.setStatus(`${playerB.getName()} won!`);

      return null;
    }
    console.table(currentPlayer.getPlayerBoard().getGameBoard());

    currentPlayer.setPlayerTurn();
    targetPlayer.setPlayerTurn();

    console.log(GameStatus.getTurnStatus(currentPlayer, targetPlayer));
    return null;
  };

  const setPlayers = (firstPlayer, secondPlayer) => {
    playerA = firstPlayer;
    playerB = secondPlayer;
  };

  const getFirstPlayer = () => playerA;
  const getSecondPlayer = () => playerB;

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

export {
  GameLoop,
};
