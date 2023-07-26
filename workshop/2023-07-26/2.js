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

console.log(getRot13Map());
