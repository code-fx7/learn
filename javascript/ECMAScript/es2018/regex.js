'use strict';

const ratio = '3/7';

// Alt
const result = /^(\d+)\/(\d+)$/u.exec(ratio);

console.log(result);

// Neu
const { numerator, denominator } = 
/^(?<numerator>\d+)\/(?<denominator>\d+)$/u.exec(ratio).groups;

console.log({ numerator, denominator });
