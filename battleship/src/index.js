import './sass/index.sass';
import { GameLoop } from './controllers/GameLoop';
import { Gameboard } from './components/Gameboard';
import { Player } from './factories/Player';
import { GameStatus } from './controllers/GameStatus';
// import { Ship } from './factories/Ship';

const main = document.querySelector('#main');

const firstPlayer = Player('FSAD');
const secondPlayer = Player('DASF');

GameLoop.setPlayers(firstPlayer, secondPlayer);

GameLoop.initializeGame(main);

main.append(Gameboard(firstPlayer), Gameboard(secondPlayer));

try {
  console.log(
    firstPlayer.getReady(),
  );
} catch (e) {
  console.log(e.message);
}

firstPlayer.setReady();
secondPlayer.setReady();

GameLoop.startGame();

const buttons = document.createElement('button');
buttons.value = 'Status';
buttons.innerText = 'asdad';
buttons.addEventListener('click', () => {
  console.log(GameStatus.getTurnStatus(firstPlayer, secondPlayer));
  console.log(GameStatus.getStatus());
});

main.append(
  buttons,
);

try {
  // console.log(
  //   GameLoop.playerAttack(2, 5, { currentPlayer: firstPlayer, targetPlayer: secondPlayer }),
  //   GameLoop.playerAttack(2, 6, { currentPlayer: firstPlayer, targetPlayer: secondPlayer }),
  //   GameLoop.playerAttack(2, 7, { currentPlayer: firstPlayer, targetPlayer: secondPlayer }),
  // );
  console.log(GameStatus.getStatus());
} catch (e) {
  console.log(e.message);
}
