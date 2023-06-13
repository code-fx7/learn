const { of } = require('rxjs');

observable = of('1', '2', '3', '4');

const observer = value => console.log(value);

observable.subscribe(observer);
