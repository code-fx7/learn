const { from } = require('rxjs');

const values = ['1', '2', '3', '4'];

observable = from(values);

const observer = value => console.log(`Array: ${value}`);

observable.subscribe(observer);

const promise = new Promise((resolve) => {
    resolve('1');
});

from(promise).subscribe((value) => console.log(`Promise: ${value}`));
