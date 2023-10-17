import { Observable } from 'rxjs';

var input = document.querySelector('input');
var observable = Observable.fromEvent(input, 'input');

observable
.map(event => event.target.value)
.debounceTime(500)
.distinctUntilChanged()
.subscribe({
  next: function(value) {
    console.log(value)
  }
});
