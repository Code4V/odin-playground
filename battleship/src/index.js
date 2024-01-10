import { Ship } from "./factories/Ship";
import { Gameboard } from "./factories/Gameboard";
const BattleShip = Ship('Destroyer')

// BattleShip.hit()

console.log(
  Gameboard.gameBoard
)

Gameboard.receiveAttack(1, 1);
Gameboard.receiveAttack(1, 1);
Gameboard.receiveAttack(1, 2);

console.log(
  Gameboard.placeShip(BattleShip, 0, 0),
  Gameboard.gameBoard,
)

console.log(BattleShip.getHealth());
