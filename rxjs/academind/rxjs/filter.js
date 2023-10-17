import { Observable, interval } from 'rxjs';
import { filter } from 'rxjs/operators';

var observable = interval(1000);

observable
.pipe(
  filter(function(value) {
  return value % 2 == 0;
})
)
.subscribe({
  next: function(value) {
    console.log(value);
  },
  error: function(error) {
    console.log('Error: ', error);
  }
});
