'use strict';

const cons = require('./cons');

const list = function (...args) {
    const [ first, ...rest ] = args;

    if (rest.length === 0) {
        return cons(first, null);
    }

    return cons(first, list(...rest));
};

module.exports = list;
