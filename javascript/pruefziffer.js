// function berechneEinstelligePruefsumme(zahl) {
//   while (zahl >= 10) {
//     zahl = berechneQuersumme(zahl);
//   }
//   return zahl;
// }

// function berechneQuersumme(zahl) {
//   return [...zahl.toString()].reduce((summe, ziffer) => summe + parseInt(ziffer), 0);
// }

// const zahl = 47;
// const einstelligePruefsumme = berechneEinstelligePruefsumme(zahl);
// console.log("Einstellige Prüfsumme:", einstelligePruefsumme);

//--------------------------------------------------------------------------------


function quersumme(zahl) {
  const ziffern = zahl.toString().split('');
  const summe = ziffern.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue),
    0
  );
  console.log(summe)
}

quersumme(1234);
quersumme(9999);
quersumme(4444);
quersumme(9876);
quersumme(123456789);
quersumme(99999999999);
