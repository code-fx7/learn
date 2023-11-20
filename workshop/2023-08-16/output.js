const { stdout } = process; // Wir benötigen stdout zur Ausgabe
stdout.write('A'); // Einzelnes Zeichen ausgeben

const numInChar = String.fromCharCode(65) // Ascii Code 65 in String `A` umwandeln
console.log(numInChar); // Ausgabe von A

const charInNum = 'A';
const code = charInNum.charCodeAt(0); // Umwandlung von Zeichen A in Ascii Code 65
console.log(code); // Augabe von 65

let state = {
  cursor: 0,
  memory: {
      blocks: [...Array(30000).keys()].map(() => 0),
      pointer: 0
  }
};

const output = (state) =>{
  String.fromCharCode(state.memory.blocks[state.memory.pointer]);
  // return {...state}
}

stdout.write(state)
// process.exit();