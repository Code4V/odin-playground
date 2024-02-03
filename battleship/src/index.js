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
  console.log(
    firstPlayer.getReady(),
  );
} catch (e) {
  console.log(e.message);
}

firstPlayer.setReady();
secondPlayer.setReady();

game.startGame();

try {
  game.playerAttack(2, 5, { currentPlayer: firstPlayer, targetPlayer: secondPlayer });

  game.playerAttack(4, 5, { currentPlayer: firstPlayer, targetPlayer: secondPlayer });
} catch (e) {
  console.log(e.message);
}