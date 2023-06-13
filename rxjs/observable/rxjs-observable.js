const { Observable } = require('rxjs');

const observer = (value) => console.log(value)

const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    setTimeout(() => subscriber.next(5), 1000);
});

observable.subscribe(observer);
observable.subscribe(observer);
