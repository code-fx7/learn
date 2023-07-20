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
  };
};

const add =(a, b) => {
  return a + b;
}

const rollDice = (dots, numberOfDice = 1) => {
  const die = createDie(dots);
  const results = process(die.roll, numberOfDice);
  return results.reduce(add);
};

const calcPercentage = (value, total, decimalPlaces = 0) => {
  const multiplierForDecimalPlaces = parseInt('1'.padEnd(decimalPlaces+1, '0'));
  const percentage = value/total*100;
  return Math.round(percentage*multiplierForDecimalPlaces)/multiplierForDecimalPlaces;
};

const countValues = (values) => {
  return values.reduce(
      (amounts, diceRoll) => {
          amounts[diceRoll] = amounts[diceRoll] | 0;
          amounts[diceRoll]++
          return amounts;
      },
      {}
  );
};

const convertToDiceObjects = (obj) => {
  const keys = Object.keys(obj);
  return keys.map((dots) => ({dots, value: obj[dots]}));
};

const getPercentages = (objs, total, decimalPlaces = 0) => {
  return objs.map(({dots, value}) => ({dots, percentage: calcPercentage(value, total, decimalPlaces)}));
}

const sort = (objs, field) => {
  const clone = [...objs];
  clone.sort((a, b) => b[field] - a[field]);
  return clone;
};

const outputPercentages = (diceObjects) => {
  diceObjects.forEach(({dots, percentage}) => console.log(`${dots}: ${percentage}%`));
}

const numberOfRolls = 1000000;
const diceRolls = process(() => rollDice(6, 2), numberOfRolls);
const countedDiceRolls = countValues(diceRolls);
const diceObjects = convertToDiceObjects(countedDiceRolls);
const withPercentages = getPercentages(diceObjects, numberOfRolls, 4);
const sorted = sort(withPercentages, 'percentage');
outputPercentages(sorted);
