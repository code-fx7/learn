const { ReplaySubject } = require('rxjs');

const subject = new ReplaySubject(3);
const observable = subject.asObservable();

const observerA = (value) => console.log('A: ' + value);
const observerB = (value) => console.log('B: ' + value);

observable.subscribe(observerA);
subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
observable.subscribe(observerB);
