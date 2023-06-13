const { timer } = require('rxjs');

const observable = timer(1000);
observable.subscribe((value) => console.log(value));
