'use strict';

const Cons = function (car, cdr) {
    const timestamp = Date.now();

    this.getCreationTime = function () {
        return timestamp;
    };

    this.car = function () {
        return car;
    };

    this.cdr = function () {
    return cdr;
    };

    this.toString = function () {
    return `${car} ${cdr}`;
    };
}

module.exports = Cons;