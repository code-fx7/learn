const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const getRandomArrayIndex = (items) => {
  return Math.floor(Math.random() * items.length);
};

const printMenu = (items) => {
  const keys = Object.keys(items);
  for (const key in keys) {
      const shape = items[key];
      console.log(`${parseInt(key) + 1} = ${shape}`);
  }
  console.log();
};

const checkInput = (input, items) => {
  const validInputs = Array.from(items.keys()).map(key => (key + 1).toString());
  return validInputs.includes(input);
};

const getUserInput = async (prompt, items) => {
  return new Promise(resolve => {
      readline.question(
          prompt,
          input => {
              if (!checkInput(input, items)) {
                  resolve(false);
                  return;
              }
              resolve(Object.keys(items)[input - 1])
          }
      );
  });
}

const compareItems = (itemOne, itemTwo) => {
  if (itemOne.beats === itemTwo.name) {
      return 1;
  }
  if (itemTwo.beats === itemOne.name) {
      return -1;
  }
  return 0;
}

const gameRound = async (shapes) => {
  let index = false;
  let check = 0;
  while (check === 0) {
      do  {
          index = await getUserInput(`> `, inputs);
          if (index === false) {
              console.log('Ungültige Eingabe.');
              console.log();
          }
      } while (index === false);

      const player = shapes[index];

      console.log();
      console.log(`Der Spieler wählt ${player.name}.`);

      const opponentIndex = getRandomArrayIndex(inputs);
      const opponent = shapes[opponentIndex];
      console.log(`Der Gegner wählt ${opponent.name}.`);
      console.log();
      console.log(`${player.name} gegen ${opponent.name}`);
      check = compareItems(player, opponent);
      if (check === 0) {
          console.log('Unentschieden');
          continue;
      }
      if (check > 0) {
          return 'Spieler';
      }
      return 'Gegner';
  }
}

const printScore = (gamestate) => {
  const players = Object.keys(gamestate);
  const scores = {};
  for (const player of players) {
      scores[player] = gamestate[player].score;
  }
  console.log(scores);
}

(async () => {
  const shapes = [
      {name: 'Schere', beats: 'Papier'},
      {name: 'Stein', beats: 'Schere'}, 
      {name: 'Papier', beats: 'Stein'}
  ];
  inputs = shapes.map(item => item.name);

  const gamestate = {
      'Spieler': { score: 0 },
      'Gegner': { score: 0 }
  };

  let winner = null;
  for (let i = 0; i < 3; i++) {
      printMenu(inputs);
      winner = await gameRound(shapes);
      gamestate[winner].score++;
      console.log(`${winner} erhält einen Punkt.`);
      printScore(gamestate);
      console.log();
  }
  if (gamestate.Spieler.score > gamestate.Gegner.score) {
      console.log('Gewonnen!');
  }
  if (gamestate.Spieler.score < gamestate.Gegner.score) {
      console.log('Verloren!');
  }

  readline.close();
})();
