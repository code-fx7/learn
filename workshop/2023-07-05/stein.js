const readline = require('readline');

const figur = ["Stein", "Schere", "Papier"];
const randomNum = Math.floor(Math.random() * 3);

function auswahlComputer() {
  return figur[randomNum];
}
console.log('Die Auswahl des Computers ist ' + auswahlComputer());

async function rline() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

return new Promise ((resolve) => {
  rl.question('Bitte wähle Stein, Schere oder Papier', (auswahl) => {
    resolve(auswahl);
    console.log('Deine Auswahl ist ' + auswahl);
    rl.close();
  });
});
//return auswahlUser;
}

async function vergleich() {
  const auswahlUser = await rline();
    if (auswahlComputer() === auswahlUser) {
      console.log('Unentschieden');
    } else if (
      (auswahlUser === "Stein" && auswahlComputer === "Schere") ||
      (auswahlUser === "Schere" && auswahlComputer === "Papier") ||
      (auswahlUser === "Papier" && auswahlComputer === "Stein")
    ) {
      console.log("Du hast gewonnen");
    } else {
      console.log("Du hast verloren");
    }
  }
console.log(vergleich());
    














// rl.question('Bitte wähle Stein, Schere oder Papier.', function (auswahlUser) {
//   rl.close();
//   console.log(`Deine Auswahl ist ${auswahlUser}`);
//   return auswahlUser;
// });