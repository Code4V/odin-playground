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
  Gameboard.placeShip(BattleShip2, 9, 3, {isVertical: false})
)

Gameboard.receiveAttack(0, 8);
Gameboard.receiveAttack(0, 9);
Gameboard.receiveAttack(1, 8);

console.table(Gameboard.gameBoard)

console.log(BattleShip.getHealth());
