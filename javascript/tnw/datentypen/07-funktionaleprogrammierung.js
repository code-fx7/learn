'use strict';

// So
const add5 = function (n) {
    return n + 5;
};

const add7 = function (n) {
    return n + 7;
};

// oder so
const getAddX = function (x) {
    return function (n) {
        return n + x;
    };
};

const add5 = getAddX(5);
const add5 = getAddX(7);

const sum = add5(9); // x = 5; n = 9; => 14

// ----------------------------------------

const primes = [ 2, 3, 5, 7, 11 ];

const getDouble = function (array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const double = 2 * item;

        result.push(double);
    }
    return result;
}

const doubledPrimes = getDouble(primes);

// besser mit der map Methode

const doubledPrimes = primes.map(function (item) {
    return item * 2;
});

const tripledPrimes = primes.map(function (item) {
    return item * 3;
});

// mit lambda Ausdruck

const doubledPrimes = primes.map(prime => prime * 2);

const tripledPrimes = primes.map(prime => prime * 3);
