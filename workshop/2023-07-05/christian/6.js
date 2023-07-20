const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const findIndices = (arr, filter) => {
  return arr.map((value, idx) => filter(value) ? idx : '').filter(String);
}

const opponents = {
  alice: (items) => getRandomArrayIndex(items),
  bob: (items, lastRound) => {
      if (lastRound === null) {
          return getRandomArrayIndex(items);
      }
      const possibleItems = findIndices(items, item => item.beats.includes(lastRound.player.name));
      return possibleItems[getRandomArrayIndex(possibleItems)];
  },
  charlie: (items, lastRound) => {
      if (lastRound === null) {
          return getRandomArrayIndex(items);
      }
      const possibleItems = findIndices(items, item => item.beats.includes(lastRound.opponent.name));
      return possibleItems[getRandomArrayIndex(possibleItems)];
  }
};

const getObjectKey = (opponents, getOpponentIndex) => {
  const keys = Object.keys(opponents);
  const index = getOpponentIndex(keys);
  return keys[index];
}

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
  if (itemOne.beats.includes(itemTwo.name)) {
      return 1;
  }
  if (itemTwo.beats.includes(itemOne.name)) {
      return -1;
  }
  return 0;
}

const gameRound = async (shapes, opponentFunc, lastRound) => {
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

      const opponentIndex = opponentFunc(shapes, lastRound);
      const opponent = shapes[opponentIndex];
      console.log(`Der Gegner wählt ${opponent.name}.`);
      console.log();
      console.log(`${player.name} gegen ${opponent.name}`);
      check = compareItems(player, opponent);
      if (check === 0) {
          lastRound = {player, opponent};
          console.log('Unentschieden');
          continue;
      }
      if (check > 0) {
          return {winner: 'Spieler', lastShapes: {player, opponent}};
      }
      return {winner: 'Gegner', lastShapes: {player, opponent}};
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
      {name: 'Schere', beats: ['Papier', 'Echse']},
      {name: 'Papier', beats: ['Stein', 'Spock']},
      {name: 'Stein',  beats: ['Schere', 'Echse']}, 
      {name: 'Echse',  beats: ['Spock', 'Papier']},
      {name: 'Spock',  beats: ['Schere', 'Stein']}
  ];
  inputs = shapes.map(item => item.name);

  const gamestate = {
      'Spieler': { score: 0 },
      'Gegner': { score: 0 }
  };

  const opponentIndex = getObjectKey(opponents, (keys) => getRandomArrayIndex(keys));
  console.log('Gegner: ', opponentIndex);
  const opponent = opponents[opponentIndex];
  let winner = null;
  let lastShapes = null;
  for (let i = 0; i < 3; i++) {
      printMenu(inputs);
      ({ winner, lastShapes } = await gameRound(shapes, opponent, lastShapes));
      gamestate[winner].score++;
      if (winner !== 0) {
          console.log(`${winner} erhält einen Punkt.`);
          printScore(gamestate);
          console.log();
      }
  }
  if (gamestate.Spieler.score > gamestate.Gegner.score) {
      console.log('Gewonnen!');
  }
  if (gamestate.Spieler.score < gamestate.Gegner.score) {
      console.log('Verloren!');
  }

  readline.close();
})();
