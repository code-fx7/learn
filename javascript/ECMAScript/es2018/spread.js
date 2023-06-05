'use strict';

const person = {
  firstName: 'Golo',
  lastName: 'Roden',
  age: 43
};

const personInOneYear = {
  ...person,
  age: 44
};

console.log(personInOneYear);
