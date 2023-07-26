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
function encryptWithRot13(text) {
  const rot13Map = getRot13Map();
  let encryptedText = "";

  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    const encryptedChar = rot13Map.has(char) ? rot13Map.get(char) : char;
    encryptedText += encryptedChar;
  }
  return encryptedText;
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
rl.question("Wie lautet der Text, der verschlüsselt werden soll?", (text) => { 
  console.log(encryptWithRot13(text));
  rl.close();
});
