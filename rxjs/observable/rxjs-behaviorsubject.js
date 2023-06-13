const { BehaviorSubject } = require('rxjs');

const subject = new BehaviorSubject('0');
const observable = subject.asObservable();

const observerA = (value) => console.log('A: ' + value);

observable.subscribe(observerA);
setTimeout(() => subject.next('1'), 2000);
