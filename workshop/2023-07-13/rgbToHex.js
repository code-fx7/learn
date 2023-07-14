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
