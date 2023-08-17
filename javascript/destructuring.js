const game = {
  title: 'Donkey Kong',
  platform: 'SNES',
  year: 1994,
  characters: {
    main: 'Donkey Kong',
    side: 'Diddy Kong',
    boss: 'Kink K. Rool',
  }
};

// let title = game.title;
// let platform = game.platform;
// let year = game.year;

// console.log(game.title);
// console.log(game.platform);
// console.log(game.year);
// console.log(game.characters.main);

// Object Destructuring

// let {
//   title,
//   platform,
//   year: release,
//   characters,
//   characters: { main, side, boss},
// } = game;

// console.log(main, side, boss);
// console.log(characters);

// let { length } = 'Dev Dreamer';
// console.log(length);

// Array Destructuring

const book = [
  'The Last Battle',
  'C.S. Lewis',
  '1956',
  ['Shift', 'Puzzle', 'Trian']
];

// let title = book[0];
// let author = book[1];
// let year = book[2];

let [title, author, year, [a,b,c]] = book;

console.log(title);
console.log(author);
console.log(year);
console.log(a,b,c);
