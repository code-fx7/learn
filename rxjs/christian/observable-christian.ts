import { Observable, Subject } from 'rxjs';

//obs.subscribe((value) => console.log(value));
//obs.subscribe((value) => console.log(value));

const sub = new Subject();
const obs = sub.asObservable();
obs.subscribe((value) => console.log('Observable', value))
sub.subscribe((value) => console.log('Subject', value));
sub.next(1);
sub.next(2);
sub.next(3);
