import { Observable } from "rxjs";
import { take } from "rxjs";

const source$ = new Observable(observer => {
  observer.next('Value 1');

  let count = 2;
const handle = setInterval(() => {
  console.log('(emitting)');
  observer.next(`Value ${count++}`);

  if(count > 5) {
    observer.complete(); // x
    // observer.error('This is an Error Message!'); // x
  }
}, 1000);

return () => {
  console.log('(clearing interval)');
  clearInterval(handle); // x
};
});

source$
  // .pipe(take(3)) // x
  .subscribe({
    next: value => console.log('next:', value),
    error: err => console.log('error:', err),
    complete: () => console.log('complete!'),
  });
  