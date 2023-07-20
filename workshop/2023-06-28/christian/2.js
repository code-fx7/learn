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

const nummern = ['1234', '9999', '4444', '9876', '123456789', '99999999999'];
const mitPruefziffer = nummern.map(nummer => erzeugePruefziffer(nummer));
const check = mitPruefziffer.map(nummer => pruefePruefziffer(nummer));
console.log('Ergebnis der Prüfung: ', check);
