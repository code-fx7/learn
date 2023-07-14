function hexToRgb(hex) {
  // Überprüfen, ob die Hexadezimalzahl mit "#" beginnt
  if (hex[0] === "#") {
    // Entfernen des "#" Zeichens
    hex = hex.slice(1);
  }

  // Überprüfen, ob die Hexadezimalzahl 3 oder 6 Zeichen lang ist
  if (hex.length !== 3 && hex.length !== 6) {
    throw new Error("Ungültige Hexadezimalzahl");
  }

  // Falls die Hexadezimalzahl 3 Zeichen lang ist, erweitern auf 6 Zeichen
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // Aufteilen der Hexadezimalzahl in R, G und B Komponenten
  var r = parseInt(hex.slice(0, 2), 16);
  var g = parseInt(hex.slice(2, 4), 16);
  var b = parseInt(hex.slice(4, 6), 16);

  // Rückgabe der RGB-Komponenten als Objekt
  return { r: r, g: g, b: b };
}

// Beispielaufruf
var hexColor = "#FF0000";
var rgbColor = hexToRgb(hexColor);
console.log(rgbColor); 
// Ausgabe: { r: 255, g: 0, b: 0 }
// Die Funktion hexToRgb erwartet eine Hexadezimalzahl als Eingabe (mit oder ohne "#" Zeichen) und gibt ein Objekt zurück, das die RGB-Komponenten enthält. Die RGB-Komponenten werden als Ganzzahlen im Bereich von 0 bis 255 dargestellt.
