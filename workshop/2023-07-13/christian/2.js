const rgbToHex = (rgb) => {
  const r = rgb.r.toString(16).padStart(2,'0');
  const g = rgb.g.toString(16).padStart(2,'0');
  const b = rgb.b.toString(16).padStart(2,'0');
  return (r+g+b).toUpperCase();
};

console.log(rgbToHex({ r: 255, g: 255, b: 255 }));
console.log(rgbToHex({ r: 0, g: 0, b: 0 }));
console.log(rgbToHex({ r: 255, g: 0, b: 0 }));
console.log(rgbToHex({ r: 0, g: 255, b: 0 }));
console.log(rgbToHex({ r: 0, g: 0, b: 255 }));
console.log(rgbToHex({ r: 171, g: 205, b: 239 }));
