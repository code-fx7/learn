const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

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
              readline.close();
          }
      );
  });
}

(async () => {
  const shapes = ['Schere', 'Stein', 'Papier'];

  console.clear();
  printMenu(shapes);
  let key;
  do  {
      key = await getUserInput(`> `, shapes);
      if (key === false) {
          console.log('Ungültige Eingabe.');
          console.log();
      }
  } while (key === false);

  console.log();
  console.log(`Der Spieler wählt ${shapes[key]}.`);
})();
