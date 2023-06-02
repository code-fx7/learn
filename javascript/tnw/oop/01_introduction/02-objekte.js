'use strict';

// Cons-Zelle

const cons = function (car, cdr) {
    const toString = function () {
        return `${car} ${cdr}`;
    };

    return { car, cdr, toString };
    };

const list = function (...args) {
    const [ first, ...rest ] = args;

    if (rest.length === 0) {
        return cons(first, null);
    }

    return cons(first, list(...rest));
};

const primes = list(2, 3, 5, 7, 11);

console.log(typeof primes);
console.log(typeof null);

console.log(primes.toString());