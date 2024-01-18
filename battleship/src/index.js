import { GameLogic } from './controllers/GameLogic';
import { GameStatus } from './controllers/GameStatus';
import { Player } from './factories/Player';
import { Ship } from './factories/Ship';
import { DefaultPositions } from './functions/defaultShipPositions';

const firstPlayer = Player('FSAD');
const secondPlayer = Player('DASF');

const game = GameStatus(firstPlayer, secondPlayer);

game.initializeGame();

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

GameLogic.createAction({
  currentPlayer: firstPlayer,
  targetPlayer: secondPlayer,
  type: 'attack',
  row: 3,
  col: 2,
});

console.log(
  game.getBoardStatus(),
);

console.table(
  DefaultPositions().getBaseBoard().getGameBoard(),
);

console.table(
  GameLogic.getStatus(),
);
