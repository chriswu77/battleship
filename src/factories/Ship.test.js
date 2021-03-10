/* eslint-disable no-undef */
import Ship from './Ship';

// creates an object
// returns the length
// returns the coordinates
// stores the hits in the hit array
// correctly checks if a ship has been sunk

describe('Ship', () => {
  test('returns an object', () => {
    const newShip = Ship('carrier', ['A1', 'B3']);
    expect(typeof newShip).toBe('object');
  });

  test('returns the correct length', () => {
    const newShip = Ship('carrier', ['A1', 'B3']);
    expect(newShip.length).toBe(5);
  });

  test('returns the coordinates', () => {
    const newShip = Ship('carrier', ['A1', 'A2', 'A3']);
    expect(newShip.location).toEqual(['A1', 'A2', 'A3']);
  });

  test('hit function stores the hit', () => {
    const newShip = Ship('carrier', ['A1', 'A2', 'A3']);
    newShip.hit = jest.fn((hitCoord) => null);
    newShip.hit(['G5']);
    expect(newShip.hit).toHaveBeenCalled();
  });

  test('ship is sunk when all coordinates are hit', () => {
    const newShip = Ship('carrier', ['A1', 'A2', 'A3']);
    newShip.hit('A1');
    newShip.hit('A2');
    newShip.hit('A3');
    expect(newShip.isSunk()).toBe(true);
  });

  test('ship is not sunk when not all coordinates are hit', () => {
    const newShip = Ship('carrier', ['A1', 'A2', 'A3']);
    newShip.hit('A1');
    newShip.hit('A2');
    expect(newShip.isSunk()).toBe(false);
  });
});
