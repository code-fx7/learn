'use strict';

// Flasy values
// - false
// - 0
// - ''
// - undefined
// - null

let x = false;

if (x) {
    console.log('I will never be run ...');
}

let a = 21;
let b = 42;

let resultOr = a || b; //=> 21
let resultAnd = a && b;