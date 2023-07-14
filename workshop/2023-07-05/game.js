const readline = require('readline');

function computerChoice() {
  const choices = ["Stein", "Schere", "Papier"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function playGame(playerChoice) {
  const computerSelection = computerChoice();
  console.log("Du hast " + playerChoice + " gewählt.");
  console.log("Der Computer hat " + computerSelection + " gewählt.");

  if (playerChoice === computerSelection) {
    console.log("Unentschieden!");
  } else if (
    (playerChoice === "Stein" && computerSelection === "Schere") ||
    (playerChoice === "Schere" && computerSelection === "Papier") ||
    (playerChoice === "Papier" && computerSelection === "Stein")
  ) {
    console.log("Du hast gewonnen!");
  } else {
    console.log("Du hast verloren!");
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Wähle Stein, Schere oder Papier:", (playerChoice) => {
  playGame(playerChoice.trim());
  rl.close();
});