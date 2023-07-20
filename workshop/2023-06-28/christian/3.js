const add = (a, b) => parseInt(a) + parseInt(b);

const quersumme = (nummer) => nummer.split('').reduce(add).toString();

const erzeugePruefziffer = (nummer) => {
  let pruefziffer = quersumme(nummer);
  while (pruefziffer.length > 1) {
    pruefziffer = quersumme(pruefziffer);
  }
  return nummer+pruefziffer;
};

const pruefePruefziffer = (nummermitPruefziffer) => {
  const nummer = nummermitPruefziffer.slice(0, -1);
  return erzeugePruefziffer(nummer) === nummermitPruefziffer;
};

const erzeugeZufallszahl = (stellen) => {
  const min = parseInt('1'.padEnd(stellen, '0'));
  const max = parseInt(''.padEnd(stellen, '9'));
  return Math.floor(Math.random() * (max - min) + min).toString();
};

const zufallszahl = erzeugeZufallszahl(7);
console.log('Zufallszahl: ',zufallszahl);
const zufallMitPruefziffer = erzeugePruefziffer(zufallszahl);
console.log('mit Prüfziffer: ', zufallMitPruefziffer);
const checkPruefziffer = pruefePruefziffer(zufallMitPruefziffer);
console.log('Prüfung: ', checkPruefziffer);
const falschePruefziffer = (parseInt(zufallMitPruefziffer.slice(-1)) + 1) % 10;
const falscheNummer = zufallMitPruefziffer.slice(0, -1) + falschePruefziffer;
console.log('Falsche Prüfziffer: ', falscheNummer);
const checkFalscheNummer = pruefePruefziffer(falscheNummer);
console.log('Ergebnis: ', checkFalscheNummer);
