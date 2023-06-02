'use strict';

class Cons {
    static counter = 0;

    constructor (car, cdr) {
        this.timestamp = Date.now();
        this.carValue = car;
        this.cdrValue = cdr;

        Cons.counter += 1;
    }

    getCreationTime () {
        return this.timestamp;
    }

    car () {
        return this.carValue;
    }

    cdr () {
        return this.cdrValue;
    }

    toString () {
        return `${this.carValue} ${this.cdrValue}`;
    }
}

module.exports = Cons;