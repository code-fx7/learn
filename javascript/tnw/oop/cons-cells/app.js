'use strict';

const cons = require('./cons');

const cell = cons(23, 42);

console.log(cell.getCreationTime());
