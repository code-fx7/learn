function wurf(anzahlWuerfe, anzahlWuerfel, anzahlSeiten) {
  let total = 0;

  for (let i = 0; i < anzahlWuerfe; i++) {
    for (let j = 0; j < anzahlWuerfel; j++) {
      const wurf = Math.floor(Math.random() * anzahlSeiten) + 1;
      total += wurf;
    }
  }

  return total;
}

const anzahlWuerfe = 2;
const anzahlWuerfel = 5;
const anzahlSeiten = 6;

const ergebnis = wurf(anzahlWuerfe, anzahlWuerfel, anzahlSeiten);
console.log(`Würfel: ${anzahlWuerfel} | Seiten: ${anzahlSeiten} | Würfe: ${anzahlWuerfe} \n
===> Das Gesamtergebnis ist: ${ergebnis}`);
