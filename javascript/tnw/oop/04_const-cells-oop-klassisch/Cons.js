'use strict';
// .this zeigt auf die neu erzeugte Instanz
// Jedesmal wenn die Cons Funktion aufgerufen wird, werden die anderen 4 Funktionen auch aufgerufen.

// const Cons = function (car, cdr) {
//     const timestamp = Date.now();

//     this.getCreationTime = function () {
//         return timestamp;
//     };

//     this.car = function () {
//         return car;
//     };

//     this.cdr = function () {
//     return cdr;
//     };

//     this.toString = function () {
//     return `${car} ${cdr}`;
//     };
// };

// module.exports = Cons;

// -----------------------------------------
// Auslagern der Funktion

const Cons = function (car, cdr) {
    this.timestamp = Date.now();
    this.carValue = car;
    this.cdrValue = cdr;
};

// Statische Property
Cons.counter = 0;

Cons.prototype.getCreationTime = function () {
    return this.timestamp;
};

Cons.prototype.car = function () {
    return this.carValue;
};

Cons.prototype.cdr = function () {
    return this.cdrValue;
};

Cons.prototype.toString = function () {
    return `${this.carValue} ${this.cdrValue}`;
};

module.exports = Cons;