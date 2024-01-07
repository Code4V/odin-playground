import { Ship } from "./factories/ship";
const BattleShip = new Ship('Destroyer')

BattleShip.hit()
BattleShip.hit()


console.log(BattleShip.getHealth());
