import './sass/index.sass';
import { GameLoop } from './controllers/GameLoop';
import { Player } from './factories/Player';
// import { Ship } from './factories/Ship';

const main = document.querySelector('#main');

const firstPlayer = Player('FSAD');
const secondPlayer = Player('DASF');

const game = GameLoop(firstPlayer, secondPlayer);

game.initializeGame(main);

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
  console.log(
    game.playerAttack(2, 5, { currentPlayer: firstPlayer, targetPlayer: secondPlayer }),
    game.playerAttack(2, 6, { currentPlayer: firstPlayer, targetPlayer: secondPlayer }),
    game.playerAttack(2, 7, { currentPlayer: firstPlayer, targetPlayer: secondPlayer }),
  );
} catch (e) {
  console.log(e.message);
}
