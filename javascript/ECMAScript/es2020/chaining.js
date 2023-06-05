'use strict';

const person = {
  firstName: 'Golo',
  lastName: 'Roden',
  age: 43
};

console.log(person.firstName.toLocaleUpperCase);

// Optional Chaining Operator ?
// console.log(person.middleName?.toUpperCase());
// wird nur ausgeführt, wenn middleName einen Wert enthält
