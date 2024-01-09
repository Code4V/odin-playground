// jest.mock('./../factories/Ship');
import { Ship } from '../factories/Ship';
// import { jest } from 'jest/global';

describe('iting the Ship factory', () => {
  it('on creation of the ship must not be null', () => {
    const shipInstance = Ship();
    
    expect(shipInstance).not.toBeNull();
  });

  it('empty string as param must return null', () => {
    const shipinstance = Ship('');
    
    expect(shipinstance).toBeNull();
  });

  it('No param ship type must be Patrol', () => {
    const shipInstance = Ship()

    expect(shipInstance.shipType).toMatch(/Patrol/)
  });
  
  it.todo('Destroyer must have 4 Lives');
  it.todo('Cruiser must have 3 Lives');
  it.todo('Patrol must have 1 Lives');

  it('0 health means isSunk is True', () => {
    const patrolShip = Ship();

    patrolShip.hit();

    expect(patrolShip.getHealth()).toBe(0);
  });

  it('shipHealth must not be below 0', () => {
    const patrolShip = Ship();

    patrolShip.hit();
    patrolShip.hit();

    expect(patrolShip.getHealth()).not.toBeLessThan(0);
  });

})

