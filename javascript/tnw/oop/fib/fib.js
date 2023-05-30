'use strict';

// 1 // 1 1 2 3 5 8 13 21 34 55

// ohne Cache

// const fib = function (n) {
//     if (n === 1 || n === 2) {
//         return 1;
//     }
//     return fib(n - 1) + fib(n-2);
// };

// for (let i = 1; i <= 10; i++) {
//     console.log(fib(i));
// }

// mit Cache

const cache = [ 1, 1 ];

const fib = function (n) {
    const index = n - 1;

    if (cache[index]) {
        return cache[index];
    }

    const result = fib(n - 1) + fib(n - 2);

    cache[index] = result;

    return result;
};

console.log(fib(45));