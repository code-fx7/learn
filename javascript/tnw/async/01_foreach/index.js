'use strict';

const primes = [ 2, 3, 5, 7, 11 ];

/* const foreach = function (array) {
    for (const item of array) {
        console.log(item);
    }
};

foreach(primes); */


// --------------------------------

/* const foreach = function (array, fn) {
    for (const item of array) {
        fn(item);
    }
};

foreach(primes, function (prime) {
    console.log(prime ** 2);
}); */

// --------------------------------

const foreach = function (array, fn) {
    for (const item of array) {
        fn(item);
    }
};

foreach(primes, prime => {
    console.log(prime ** 2);
});