const result1 = ['1', '2', '3'];
console.log(result1);
const result2 = ['1', '2', '3'].map(value => value + 'A');
console.log(result2);
const result3 = ['1', '2', '3'].filter(value => value !== '2');
console.log(result3);

const { of } = require('rxjs');

of('1', '2', '3').subscribe(marble => console.log(marble));

of(['1', '2', '3']).subscribe(marble => console.log(marble));

const { map } = require('rxjs/operators');

of('1', '2', '3').pipe(
    map(marble => marble + 'A')
).subscribe(marble => console.log(marble));

of(['1', '2', '3'], ['4', '5', '6']).pipe(
    map(marble => marble.map(value => value + 'A'))
).subscribe(marble => console.log(marble));

const { filter } = require('rxjs/operators');

of('1', '2', '3').pipe(
    filter(marble => marble !== '2')
).subscribe(marble => console.log(marble));

of(['1', '2', '3']).pipe(
    map(marble => marble.filter(value => value !== '2'))
).subscribe(marble => console.log(marble));


of(['1', '2', '3'], [], ['4', '5', '6']).pipe(
    filter(marble => marble.length > 0)
).subscribe(marble => console.log(marble));
