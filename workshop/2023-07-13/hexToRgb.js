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
