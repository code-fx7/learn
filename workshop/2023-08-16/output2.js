const { stdout } = process;

let state = {
  cursor: 0,
  memory: {
    blocks: [...Array(30000).keys()].map(() => 0),
    pointer: 0,
  },
};


//Nur zum testen

// for (let i = 0; i < 26; i++) {
//   state.memory.blocks[i] = 65 + i;
// }

const output = (state) => {
  const char = String.fromCharCode(state.memory.blocks[state.memory.pointer]);
  stdout.write(char);
  return state;
};

output(state);

process.exit();
