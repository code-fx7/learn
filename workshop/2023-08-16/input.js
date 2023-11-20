const { stdin } = process; // Wir benötigen stdin zum einlesen

stdin.setRawMode( true ); // Damit einzelne Zeichen gelesen werden können
stdin.resume();

stdin.setEncoding('utf8'); // Encoding auf UTF-8 einstellen damit Javascript mit der Eingabe besser umgehen kann

stdin.on('data', function(key) {
  if ( key === '\u0003' ) { // CTRL+C zum Abbruch
    process.exit(); // Programm beenden
  }
  console.log(key) // Den eingegebenen wert ausgeben
});


let state = {
  cursor: 0,
  memory: {
      blocks: [...Array(30000).keys()].map(() => 0),
      pointer: 0
  }
};

const input = (state) => {
  const char = 'A';
  const code = char.charCodeAt(0);
  console.log(code);
  return {...state}
}


process.exit();
