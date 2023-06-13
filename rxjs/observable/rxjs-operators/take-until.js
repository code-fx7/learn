const { Subject } = require('rxjs');
const { takeUntil } = require('rxjs/operators');

// Konstruktor
const destroySubject = new Subject();
const destroyObservable = destroySubject.asObservable().pipe(take(1));

const subject = new Subject();
const observable = subject.asObservable().pipe(
    takeUntil(destroyObservable)
);
observable.subscribe(value => console.log(value));

subject.next('1');
subject.next('2');
setTimeout(() => subject.next('3'), 1000);

// Destruktor
destroySubject.next();
