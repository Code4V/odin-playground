import { GameLogic } from './controllers/GameLogic';
import { GameStatus } from './controllers/GameStatus';
import { Player } from './factories/Player';

const firstPlayer = Player('FSAD');
const secondPlayer = Player('DASF');

const game = GameStatus().initializeGame();

GameLogic.createAction({
  currentPlayer: firstPlayer,
  targetPlayer: secondPlayer,
  type: 'attack',
  row: 2,
  col: 3,
});

console.log(
  game.getBoardStatus(),
);

console.table(
  GameLogic.getStatus(),
);
