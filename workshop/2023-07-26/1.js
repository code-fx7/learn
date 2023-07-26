const readline = require('readline');

const rl= readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const shiftedChar = 3;

function rot(text) {
  return text.replace(/[a-zA-Z]/g, (char) => {
    const charCode = char.charCodeAt(0);
    let shiftedCode;
    if (char >= "a" && char <= "z") {
      shiftedCode = charCode + shiftedChar;
      // In der ASCII-Tabelle haben die Kleinbuchstaben des Alphabets die Nummern 97 bis 122, und die Großbuchstaben haben die Nummern 65 bis 90.
      if (shiftedCode > 122) {
        shiftedCode = 96 + (shiftedCode - 122);
      }
    } else if (char >= "A" && char <= "Z") {
      shiftedCode = charCode + shiftedChar;
      if (shiftedCode > 90) {
        shiftedCode = 64 + (shiftedCode - 90);
      }
    }
    return String.fromCharCode(shiftedCode);
  });
}

rl.question(`Welchen Buchstaben möchtest du um ${shiftedChar} Zeichen verschieben?`, (text) => { 
  console.log(rot(text));
  rl.close();
});
