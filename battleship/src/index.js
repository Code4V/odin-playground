import { GameLogic } from './controllers/GameLogic';
import { GameStatus } from './controllers/GameStatus';
import { Player } from './factories/Player';

const firstPlayer = Player('FSAD');
const secondPlayer = Player('DASF');

console.log(
  GameStatus(firstPlayer, secondPlayer).getStatus(),
);

console.table(
  GameLogic.getStatus(),
);
