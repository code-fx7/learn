const { AsyncSubject } = require('rxjs');

const subject = new AsyncSubject();
const observable = subject.asObservable();

const observer = (value) => console.log(value);

observable.subscribe(observer);
subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.complete();
