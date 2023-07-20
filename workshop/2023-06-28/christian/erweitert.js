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

const erzeugeZufallszahl = (stellen) => {
  const max = parseInt(''.padStart(stellen, '9'));
  const min = parseInt('1'.padEnd(stellen, '0'));
  return Math.floor(Math.random() * (max - min) + min).toString();
};

const algorithms = [];
const ALG_SIMPLE = algorithms.push(simpleAlg) - 1;
const ALG_MOD = algorithms.push(moduloAlg) - 1;

const erzeugePruefziffer = (nummer, algIndex) => {
  const alg = algorithms[algIndex];
  return algIndex + nummer + alg(nummer);
}

const pruefePruefziffer = (raw) => {
  const algIndex = raw.slice(0, 1);
  const nummer = raw.slice(1, -1);
  return erzeugePruefziffer(nummer, algIndex) === raw;
};

const ausgabe = (nummer, alg) => {
  const ergebnis = erzeugePruefziffer(nummer, alg);
  console.log(ergebnis);
  const check = pruefePruefziffer(ergebnis);
  console.log(check);
}

const zufall = erzeugeZufallszahl(4);
ausgabe(zufall, ALG_SIMPLE);
ausgabe(zufall, ALG_MOD);
