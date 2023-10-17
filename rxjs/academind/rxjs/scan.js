import { Observable, of } from 'rxjs';
import { scan } from 'rxjs/operators';

var observable = Observable.of(1, 2, 3, 4, 5);

observable
.scan((total, currentValue) => {
  return total + currentValue;
}, 0)
.subscribe({
  next: function(value) {
    console.log(value);
  }
});
