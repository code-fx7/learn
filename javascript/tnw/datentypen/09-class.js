'use strict';

const Dog = function (name) {
    this.name = name;

    this.bark = function () {
        console.log('Wau wau!');
    };
};

const alice = new Dog('Alice');

// ----------------------------

'use strict';

class Dog {
    constructor (name) {
        this.name = name;
    }

    bark () {
        console.log('Wau wau!');
    }
}

console.log(typeof Dog); // => function

const alice = new Dog('Alice');
