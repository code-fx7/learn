const { of } = require('rxjs');
const { filter, map, tap } = require('rxjs/operators');

of('1', '2', '3').pipe(
    map(marble => marble + 'A'),
    tap(marble => console.log(`TAP: ${marble}`)),
    filter(marble => marble !== '2A')
).subscribe(marble => console.log(`SUB: ${marble}`));
