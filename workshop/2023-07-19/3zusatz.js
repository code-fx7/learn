function wurf() {
  let total = 0;

  const anzahlSeiten = Math.floor(Math.random()) + 1;
  const anzahlWuerfel = Math.floor(Math.random() * anzahlSeiten) + 1;
  const anzahlWuerfe = Math.floor(Math.random()) + 1;
  total += anzahlWuerfe;
  
  return anzahlWuerfel;
}

wurf();
console.log(anzahlSeiten);















// const readline = require('readline');

// const rl= readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function wurf(anzahlWuerfel,anzahlSeiten,anzahlWuerfe) {
//   let total = 0;

//   for (let i = 0; i < anzahlWuerfe; i++) {
//     for (let j = 0; j < anzahlWuerfel; j++) {
//       const wurf = Math.floor(Math.random() * anzahlSeiten) + 1;
//       total += wurf;
//     }
//   }

//   return total;
// }

// // const anzahlWuerfel = 5;
// // const anzahlSeiten = 6;
// // const anzahlWuerfe = 2;

// // const ergebnis = wurf(anzahlWuerfe, anzahlWuerfel, anzahlSeiten);
// // console.log(`Würfel: ${anzahlWuerfel} | Seiten: ${anzahlSeiten} | Würfe: ${anzahlWuerfe} \n
// // ===> Das Gesamtergebnis ist: ${ergebnis}`);

// rl.question("Wie viele Seiten soll der Würfel haben?", (anzahlWuerfel,anzahlSeiten,anzahlWuerfe) => { 
//   console.log(wurf(anzahlWuerfel,anzahlSeiten,anzahlWuerfe));
//   rl.close();
// });
