'use strict';

const person = {
  firstName: 'Golo',
  lastName: 'Roden',
  age: 43
};

const person2 = 
Object.fromEntries(Object.entries(person)
  .map(([ key, value ]) => [ key.toLocaleUpperCase(), value ]
  ));

console.log(person2);
