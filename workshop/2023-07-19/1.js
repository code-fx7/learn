const readline = require('readline');

const rl= readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function zufallszahl(seiten) {
  return Math.floor(Math.random() * seiten) +1;
}


rl.question("Wie viele Seiten soll der Würfel haben?", (seiten) => { 
  console.log(zufallszahl(seiten));
  rl.close();
});
