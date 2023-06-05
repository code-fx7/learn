'use strict';

const person = {
  firstName: 'Golo',
  lastName: 'Roden',
  age: 43
};

const { age, ...names } = person;

console.log({ names });
