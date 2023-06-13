const { interval } = require('rxjs');

const observable = interval(1000);
observable.subscribe(value => console.log(value));
