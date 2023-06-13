const { Subject } = require('rxjs');
const { take } = require('rxjs/operators');

const subject = new Subject();
const observable = subject.asObservable().pipe(
    take(2)
);

const subscription = observable.subscribe(value => console.log(value));

subject.next('1');
subject.next('2');
subject.next('3');
