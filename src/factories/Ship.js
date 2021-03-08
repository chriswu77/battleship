// The 5 ships are:
// Carrier (occupies 5 spaces),
// Battleship (4),
// Cruiser (3),
// Submarine (3),
// and Destroyer (2)

const Ship = (name, coordinates) => {
  let length;
  if (name === 'carrier') {
    length = 5;
  } else if (name === 'battleship') {
    length = 4;
  } else if (name === 'cruiser' || name === 'submarine') {
    length = 3;
  } else {
    length = 2;
  }
  const location = coordinates;
  const hits = [];

  const hit = (coordinate) => {
    hits.push(coordinate);
  };

  const isSunk = () => hits.every((coord) => location.includes(coord));

  return {
    name,
    length,
    location,
    hits,
    hit,
    isSunk,
  };
};

export default Ship;
