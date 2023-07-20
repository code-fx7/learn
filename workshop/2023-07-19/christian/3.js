const randInt = (min, max) => {
  const diff = max - min + 1;
  const rand = Math.floor(Math.random() * diff);
  return rand + min;
};

const process = (fn, amount) => {
  const results = [];
  for (let i = 0; i < amount; i++) {
      results.push(fn());
  }
  return results;
};

const createDie = (dots) => {
  return {
      roll: () => randInt(1, dots)
  }
};

const add = (a, b) => {
  return `${a}+${b}=${a + b}`;
}

const rollDice = (dots, numberOfDice = 1) => {
  const die = createDie(dots);
  const results = process(die.roll, numberOfDice);
  return results.reduce(add);
};

const numberOfRolls = 50;
const diceRolls = process(
  () => rollDice(6, 2),
  numberOfRolls
);
console.log(diceRolls);
