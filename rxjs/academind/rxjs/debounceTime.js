import { Observable } from 'rxjs';

var input = document.querySelector('input');
var observable = Observable.fromEvent(input, 'Input');

observable
.debounceTime(500)
.subscribe({
  next: function(event) {
    console.log(event.target.value);
  }
});
