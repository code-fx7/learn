const { Subject } = require('rxjs');

const subject = new Subject();
const observable = subject.asObservable();

const observerA = (value) => console.log('A: ' + value);

const subscription = observable.subscribe(observerA);
subject.next(1);
subject.next(2);
subject.next(3);
subject.complete();
subject.next(4);
