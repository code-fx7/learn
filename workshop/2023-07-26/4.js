// Readline Initialisierung
const readline = require('readline');

const rl= readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Übersetzungsmap
function getRot13Map() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const rot13Alphabet = "nopqrstuvwxyzabcdefghijklm";
  
  const rotMap = new Map();

  for (let i = 0; i < alphabet.length; i++) {
    rotMap.set(alphabet[i], rot13Alphabet[i]);
    rotMap.set(alphabet[i].toUpperCase(), rot13Alphabet[i].toUpperCase());
  }
  return rotMap;
}

// Verschlüsselungsfunktion
function decryptWithRot13(text) {
  const rot13Map = getRot13Map();
  let decryptedText = "";

  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    const decryptedChar = rot13Map.has(char) ? rot13Map.get(char) : char;
    decryptedText += decryptedChar;
  }

  return decryptedText;
}

// Die zuvor erstellte getRot13Map() Funktion verwenden
function getRot13Map() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const rot13Alphabet = "nopqrstuvwxyzabcdefghijklm";

  const rotMap = new Map();

  for (let i = 0; i < alphabet.length; i++) {
    rotMap.set(alphabet[i], rot13Alphabet[i]);
    rotMap.set(alphabet[i].toUpperCase(), rot13Alphabet[i].toUpperCase());
  }

  return rotMap;
}

// Readline In- und Output
rl.question("Wie lautet der Text, der entschlüsselt werden soll?", (text) => { 
  console.log(decryptWithRot13(text));
  rl.close();
});
