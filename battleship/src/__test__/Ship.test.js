// jest.mock('./../factories/Ship');
import { Ship } from '../factories/Ship';
// import { jest } from 'jest/global';

describe('Testing the Ship factory', () => {
  test('On creation of the Ship must not be Null', () => {
    const shipInstance = Ship('');
    
    expect(shipInstance).not.toBeNull();
  })
})

