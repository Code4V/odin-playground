import { GameLogic } from './controllers/GameLogic';
import { GameLoop } from './controllers/GameLoop';
import { GameStatus } from './controllers/GameStatus';
import { Player } from './factories/Player';
import { Ship } from './factories/Ship';

const firstPlayer = Player('FSAD');
const secondPlayer = Player('DASF');

const game = GameLoop(firstPlayer, secondPlayer);

game.initializeGame();

try {
  GameLogic.createAction({
    currentPlayer: secondPlayer,
    type: 'placement',
    row: 2,
    col: 2,
    ship: Ship('Carrier'),
    options: {
      isVertical: true,
    },
  });
} catch (e) {
  console.log(e.message);
}

console.log(
  firstPlayer.getPlayerTurn(),
  secondPlayer.getPlayerTurn(),
);

GameLogic.createAction({
  currentPlayer: firstPlayer,
  targetPlayer: secondPlayer,
  type: 'attack',
  row: 3,
  col: 2,
});

Object.entries(GameStatus.getBoardStatus(firstPlayer, secondPlayer)).forEach((entry) => {
  entry.forEach((table) => console.table(table));
});

// console.table(
//   DefaultPositions().getBaseBoard().getGameBoard(),
// );

// console.table(
//   GameLogic.getStatus(),
// );
