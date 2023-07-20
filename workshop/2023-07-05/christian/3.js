const compareItems = (itemOne, itemTwo) => {
  if (itemOne.beats === itemTwo.name) {
      return 1;
  }
  if (itemTwo.beats === itemOne.name) {
      return -1;
  }
  return 0;
}

const shapes = [
  {name: 'Schere', beats: 'Papier'},
  {name: 'Stein', beats: 'Schere'}, 
  {name: 'Papier', beats: 'Stein'}
];

console.log('Schere gegen Schere', compareItems(shapes[0], shapes[0]));
console.log('Schere gegen Stein', compareItems(shapes[0], shapes[1]));
console.log('Schere gegen Papier', compareItems(shapes[0], shapes[2]));
console.log('Stein gegen Schere', compareItems(shapes[1], shapes[0]));
console.log('Stein gegen Stein', compareItems(shapes[1], shapes[1]));
console.log('Stein gegen Papier', compareItems(shapes[1], shapes[2]));
console.log('Papier gegen Schere', compareItems(shapes[2], shapes[0]));
console.log('Papier gegen Stein', compareItems(shapes[2], shapes[1]));
console.log('Papier gegen Papier', compareItems(shapes[2], shapes[2]));
