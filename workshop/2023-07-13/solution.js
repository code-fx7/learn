// const hex = "F0F8FF";
// const radix = 16;

// function hexToDecimal(hex) {
//   var rgb =parseInt(hex, radix); 
//   return rgb;
// }
// var ergebnis = hexToDecimal(hex);
// console.log(ergebnis);


// 2

// const hex = "F0F8FF";
// const hexToDecimal = hex => parseInt(hex, 16);
// console.log(hexToDecimal(hex));

// 3

// 1. HEX zu RGB

function hexToRgb(hex) {
  hex = hex.slice(1);

  var r = parseInt(hex.slice(0, 2), 16);
  var g = parseInt(hex.slice(2, 4), 16);
  var b = parseInt(hex.slice(4, 6), 16);

    return { r, g, b };
}
const hex = "#F0F8FF";
const rgb = hexToRgb(hex);
console.log(rgb);

// 2. RGB zu HEX

function rgbToHex(r, g, b) {
  var r = r.toString(16);
  var g = g.toString(16);
  var b = b.toString(16);

  return "#" + r + g + b;
}
const r = 240;
const g = 248;
const b = 255;
const hex1 = rgbToHex(r, g, b).toUpperCase();
console.log(hex1);

// 3. Komplementärfarbe

function kontrast(hexFarbe) {
  var r =parseInt(hexFarbe.slice(1, 3), 16);
  var g =parseInt(hexFarbe.slice(3, 5), 16);
  var b =parseInt(hexFarbe.slice(5, 7), 16);

  var rgbR = 255 - r;
  var rgbG = 255 - g;
  var rgbB = 255 - b;

  var kontrastHex = "#" + rgbR.toString(16).padStart(2, "0") + rgbG.toString(16).padStart(2, "0") + rgbB.toString(16).padStart(2, "0");
  return kontrastHex;
}

var hexFarbe = "#FF0000";
var kontrastFarbe = kontrast(hexFarbe).toUpperCase();
console.log(kontrastFarbe);
