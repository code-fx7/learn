const { Subject, of } = require('rxjs');
const { catchError, map } = require('rxjs/operators');

const subject = new Subject();
const observable = subject.asObservable().pipe(
    map(value => {
        if (value.includes('4')) {
            throw 'Dies ist ein Fehler';
        }
        return value;
    }),
    catchError(err => of({err: err}))
);

observable.subscribe(value => console.log(value));
subject.next(['1', '2', '3']);
subject.next(['4', '5', '6']);
subject.next(['7', '8', '9']);
