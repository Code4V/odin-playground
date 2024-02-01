import { GameLogic } from './controllers/GameLogic';
import { GameLoop } from './controllers/GameLoop';
import { GameStatus } from './controllers/GameStatus';
import { Player } from './factories/Player';
// import { Ship } from './factories/Ship';

const firstPlayer = Player('FSAD');
const secondPlayer = Player('DASF');

const game = GameLoop(firstPlayer, secondPlayer);

game.initializeGame();

try {
  // firstPlayer.getPlayerBoard().removeShip(4, 5, { isVertical: true });
  console.log(
    firstPlayer.getReady(),
  );
} catch (e) {
  console.log(e.message);
}

firstPlayer.setReady();
secondPlayer.setReady();

game.startGame();

console.log(
  GameStatus.getStatus(),
);

try {
  // GameLogic.createAction({
  //   currentPlayer: secondPlayer,
  //   type: 'placement',
  //   row: 2,
  //   col: 2,
  //   ship: Ship('Carrier'),
  //   options: {
  //     isVertical: true,
  //   },
  // });

  console.log(
    firstPlayer.getPlayerTurn(),
    secondPlayer.getPlayerTurn(),
  );

  game.playerAttack(3, 5, { currentPlayer: firstPlayer, targetPlayer: secondPlayer });

  game.playerAttack(4, 5, { currentPlayer: firstPlayer, targetPlayer: secondPlayer });

  console.log(
    secondPlayer.getPlayerBoard().getGameBoard()[5][5].getHealth(),
  );

  // game.playerAttack(1, 1, {
  //   currentPlayer: secondPlayer,
  //   targetPlayer: firstPlayer,
  // });

  console.log(
    firstPlayer.getPlayerTurn(),
    secondPlayer.getPlayerTurn(),
  );

  Object.entries(GameStatus.getBoardStatus(firstPlayer, secondPlayer))
    .forEach((entry) => {
      entry.forEach((table) => console.table(table));
    });
} catch (e) {
  console.log(e.message);
}
// console.table(
//   DefaultPositions().getBaseBoard().getGameBoard(),
// );

// console.table(
//   GameLogic.getStatus(),
// );
