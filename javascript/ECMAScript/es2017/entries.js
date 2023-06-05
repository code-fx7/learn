'use strict';

const person = {
  firstName: 'Golo',
  lastName: 'Roden',
  age: 43
};

console.log(Object.entries(person));

for (const [ key, value ] of Object.entries(person)) {
  console.log({key, value});
}