import { interval, OperatorFunction } from "rxjs";
import { map, take, tap } from "rxjs";

const source$ = interval(1000).pipe(
  // take(1),
  tap(v => {
    console.log(`(interval: ${v})`);
  }),
);

function multiply(by: number): OperatorFunction<number, number> {
  return map(v => v * by);
}

const double = multiply(2);

source$.pipe(double, take(3)).subscribe({
  next: console.log,
  error: console.warn,
  complete: () => console.log('completed'),
});
