const add = (a, b) => parseInt(a) + parseInt(b);

const quersumme = (nummer) => nummer.split('').reduce(add).toString();

const simpleAlg = (nummer) => {
  let pruefziffer = quersumme(nummer);
  while (pruefziffer.length > 1) {
    pruefziffer = quersumme(pruefziffer);
  }
  return pruefziffer;
};

const moduloAlg = (nummer) => {
  let summe = quersumme(nummer);
  return summe % 10;
};

const erzeugePruefziffer = (nummer, alg = simpleAlg) => {
  return nummer + alg(nummer);
};

const pruefePruefziffer = (nummermitPruefziffer, alg = simpleAlg) => {
  const nummer = nummermitPruefziffer.slice(0, -1);
  return erzeugePruefziffer(nummer, alg) === nummermitPruefziffer;
};

const erzeugeZufallszahl = (stellen) => {
  const max = parseInt(''.padStart(stellen, '9'));
  const min = parseInt('1'.padEnd(stellen, '0'));
  return Math.floor(Math.random() * (max - min) + min).toString();
};

const nummern = ['1234', '9999'];
console.log('Zahlen: ', nummern);
const einfachePruefziffern = nummern.map(nummer => erzeugePruefziffer(nummer));
console.log('Einfache Prüfziffer: ', einfachePruefziffern);

const checkEinfachePruefziffer = einfachePruefziffern.map(nummer => pruefePruefziffer(nummer));
console.log('Prüfung (einfach): ', checkEinfachePruefziffer);

const modPruefziffer = nummern.map(nummer => erzeugePruefziffer(nummer, moduloAlg));
console.log('Modulo Prüfziffer: ', modPruefziffer);

const checkModPruefziffer = modPruefziffer.map(nummer => pruefePruefziffer(nummer, moduloAlg));
console.log('Prüfung (modulo): ', checkModPruefziffer);
