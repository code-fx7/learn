const hexToRgb = (hexValue) => {
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);
  return { r, g, b };
};

console.log(hexToRgb('FFFFFF'));
console.log(hexToRgb('000000'));
console.log(hexToRgb('FF0000'));
console.log(hexToRgb('00FF00'));
console.log(hexToRgb('0000FF'));
console.log(hexToRgb('ABCDEF'));
