const readline = require('readline');

const rl= readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function beliebigeWuerfel(anzahlWuerfel) {
  let total = 0;
  
  for (let i = 0; i < anzahlWuerfel; i++) {
    const wurf = Math.floor(Math.random() * 6) + 1;
    total += wurf;
  }
  
  return total;
}

rl.question("Wie viele Würfel sollen es sein?", (anzahlWuerfel) => { 
  console.log(beliebigeWuerfel(anzahlWuerfel));
  rl.close();
});
