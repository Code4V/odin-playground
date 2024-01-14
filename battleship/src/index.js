import { GameLogic } from './controllers/GameLogic';

GameLogic.createAction({
  type: {
    attack: {
      row: 1,
      col: 2,
    },
  },
});

console.table(
  GameLogic.getStatus(),
);
