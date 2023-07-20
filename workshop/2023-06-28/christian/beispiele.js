let ergebnis = ['Hallo', 'Welt'].reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);
console.log(ergebnis);

ergebnis = [2, 1].reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(ergebnis);

ergebnis = [2, 1].reduce(
    (accumulator, currentValue) => accumulator - currentValue
);
console.log(ergebnis);

ergebnis = '1,:2,:3,:4'.split(',');
console.log(ergebnis);

console.log(1+1);

console.log(1+'1');

console.log('1'+1);

console.log('1'-0+1);

console.log('1a'-0+1);

console.log(parseInt('1a')+1);


console.log('1234'.slice(1));

console.log('1234'.slice(1,3));

console.log('1234'.slice(1, -2));
