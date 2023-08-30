// let nums = [1, 2, 3];
// let myArray = [nums, 4, 5, 6];
// let myArray2 = [...nums, 4, 5, 6];

// console.log(nums);
// console.log(myArray);
// console.log(myArray2);

//---------------------------------------------
// let nums = [1, 2, 3];
// let letters = ['a', 'b', 'c']

// let myArray = [...nums, ...letters, 4, 5, 6];

// console.log(myArray);

//---------------------------------------------
// const characters = [
//   { id: 1, name: 'Sonic' },
//   { id: 2, name: 'Mario' },
//   { id: 3, name: 'Link' },
// ];

// const newCharacter = { id: 4, name: 'Donkey Kong' };
// characters.push(newCharacter);
// const updatedCharacters = [...characters, newCharacter];
// characters.pop();

// console.log(characters);
// console.log(updatedCharacters);

//---------------------------------------------
// const book = {
//   title: 'The lion, the witch and the wardrobe',
//   release: '16/10/1950',
//   author: 'C.S. Lewis',
//   relatedBooks: {
//     title1: 'The Magican\'s Nephew',
//     title2: 'Prince Caspian',
//     title3: 'The Silver Chair',
//   },
// };

// const updatedBook = {
//   ...book,
//   characters: 'Peter, Susan, Edmund, Lucy',
//   relatedBooks: {
//     ...book.relatedBooks,
//     title4: 'The Horse and his Boy',
//   },
// };

// console.log(book);
// console.log(updatedBook);

//---------------------------------------------
// function sum(a, b, c) {
//   return console.log(a + b + c);
// }

// sum(1, 2, 3);

function sum(a, b, c) {
  return console.log(a + b + c);
}

const nums = [1, 2, 3];

sum(...nums);