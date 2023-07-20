const randInt = (min, max) => {
  const diff = max - min;
  const rand = Math.floor(Math.random() * diff);
  return rand + min;
};

const rollDie = (dots) => {
  return randInt(1, dots);
};

console.log(rollDie(6));
