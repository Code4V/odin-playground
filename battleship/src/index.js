import { GameLogic } from './controllers/GameLogic';
import { Ship } from './factories/Ship';

GameLogic.createAction({
  type: 'attack',
  row: 1,
  col: 2,
});

GameLogic.createAction({
  type: 'placement',
  row: 1,
  col: 6,
  ship: Ship('Cruiser'),
});

GameLogic.createAction({
  type: 'placement',
  row: 8,
  col: 0,
  ship: Ship('BattleShip'),
  options: {
    isVertical: true,
  },
});

console.table(
  GameLogic.getStatus(),
);
