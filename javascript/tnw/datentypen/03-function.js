'use strict';

// Function statement (Kann nicht in Objekten benutzt werden)
function add (left, right) {
    return left + right;
}

const sum = add(21, 42);

console.log(sum);

// Function expression (Kann überall genutzt werden)
const add = function (left, right) {
    return left + right;
};

const sum1 = add(21, 42);

console.log(sum1);
