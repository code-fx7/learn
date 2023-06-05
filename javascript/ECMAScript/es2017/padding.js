'use strict';

const values = [ 'Golo', 'Roden', '43' ];

for (const value of values) {
  console.log(value.padStart(5, ' '));
}

// Alternativ: padEnd

for (const value of values) {
  console.log(value.padEnd(10, '.'));
}