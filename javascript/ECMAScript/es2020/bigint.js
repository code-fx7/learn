'use strict';

const hugeNumber = BigInt(345678909876546789098765678909876);
const alternative = 345678909876546789098765678909876n;

const result = hugeNumber + alternative;

console.log(result, typeof result);
