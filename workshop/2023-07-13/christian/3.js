const hexToRgb = (hexValue) => {
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);
  return { r, g, b };
};

const rgbToHex = (rgb) => {
  const r = rgb.r.toString(16).padStart(2,'0');
  const g = rgb.g.toString(16).padStart(2,'0');
  const b = rgb.b.toString(16).padStart(2,'0');
  return (r+g+b).toUpperCase();
};

const calculateComplementary = (rgb) => ({
  r: 255 - rgb.r,
  g: 255 - rgb.g,
  b: 255 - rgb.b
});

const calculateHexComplementary =(hex) => {
  const rgb = hexToRgb(hex);
  const complementary = calculateComplementary(rgb);
  return rgbToHex(complementary);
}

console.log(calculateHexComplementary('FFFFFF'));
console.log(calculateHexComplementary('000000'));
console.log(calculateHexComplementary('FF0000'));
console.log(calculateHexComplementary('00FF00'));
console.log(calculateHexComplementary('0000FF'));
console.log(calculateHexComplementary('ABCDEF'));
