/* eslint-env jest */

import { Ship } from '../factories/Ship';

describe('Testing the Ship factory', () => {
  it('on creation of the ship must not be null', () => {
    const shipInstance = Ship();

    expect(shipInstance).not.toBeNull();
  });

  it('empty string as param must return null', () => {
    const shipinstance = Ship('');

    expect(shipinstance).toBeNull();
  });

  it('No param ship type must be Patrol', () => {
    const shipInstance = Ship();

    expect(shipInstance.getType()).toMatch(/PATROL/);
  });

  it('Battleship must have 4 Lives', () => {
    const battleShip = Ship('BattleShip');

    expect(battleShip.getHealth()).toBe(4);
  });

  it('0 health means isSunk is True', () => {
    const patrolShip = Ship();

    patrolShip.hit();
    patrolShip.hit();

    expect(patrolShip.getHealth()).toBe(0);
  });

  it('shipHealth must not be below 0', () => {
    const patrolShip = Ship();

    patrolShip.hit();
    patrolShip.hit();

    expect(patrolShip.getHealth()).not.toBeLessThan(0);
  });
});
