import { interval, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const source$ = interval(1000).pipe(
  // take(1), // x
  tap(value => {
    console.log(`interval: ${value}`);
  }),
);

// Operator (Funktion)
// 1

// function double(source: Observable<number>): Observable<number> {
//   return new Observable(observer => {
//     observer.next(2);
//     observer.complete();
//   });
// }

// 2

function double(source: Observable<number>): Observable<number> {
  return new Observable(observer => {
    return source.subscribe({
      next: value => observer.next(value * 2),
      error: err => observer.error(err),
      complete: () => observer.complete(),
    });
  });
}

source$
  .pipe(
    double,
    take(3), // x
  )
  .subscribe({
    next: (value) => console.log('next', value),
    error: ({ message }) => console.warn(`error: ${message}`),
    complete: () => console.log('completed'),
  });
