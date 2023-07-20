const getRandomArrayIndex = (items) => {
  return Math.floor(Math.random() * items.length);
};

const shapes = ['Schere', 'Stein', 'Papier'];
const random = getRandomArrayIndex(shapes);
console.log(shapes[random]);
