import { Ship } from "./factories/ship";
import { Gameboard } from "./factories/Gameboard";

const BattleShip = Ship('Carrier');
const BattleShip2 = Ship('Cruiser');

// BattleShip.hit()

Gameboard.receiveAttack(1, 1);
Gameboard.receiveAttack(1, 1);
Gameboard.receiveAttack(1, 2);

console.log(
  Gameboard.placeShip(BattleShip, 0, 8, {isVertical: true}),
  Gameboard.placeShip(BattleShip2, 9, 3, {isVertical: true})
)

console.table(Gameboard.gameBoard)

console.log(BattleShip.getHealth());
