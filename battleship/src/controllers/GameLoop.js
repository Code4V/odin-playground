import { DefaultPositions } from '../functions/defaultShipPositions';
import { GameStatus } from './GameStatus';

export const GameLoop = (firstPlayer, secondPlayer) => {
  const playerA = firstPlayer;
  const playerB = secondPlayer;

  const initializeGame = () => {
    playerA.setPlayerBoard(DefaultPositions().getBaseBoard());
    playerB.setPlayerBoard(DefaultPositions().singleTestShip());

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

    console.log(
      playerAShipsArray,
      playerBShipsArray,
    );
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

      const mapCopy = Array.from(
        targetPlayer.getPlayerBoard().getPlayerShips(),
      );

      checkWin();

      console.log(
        mapCopy.some((ship) => ship[1].Ships.getHealth() !== 0),
      );

      return null;
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
