'use strict';
// Mit jedem Cons Aufruf um eine Zelle zu bauen, werden jedesmal die 4 Funktion in den Speicher geschrieben
const cons = function (car, cdr) {
    const timestamp = Date.now();

    const getCreationTime = function () {
        return timestamp;
    };

    const carFn = function () {
        return car;
    };

    const cdrFn = function () {
        return cdr;
    };

    const toString = function () {
        return `${car} ${cdr}`;
    };

    return {
        getCreationTime,
        car: carFn,
        cdr: cdrFn,
        toString
    };
};

module.exports = cons;
