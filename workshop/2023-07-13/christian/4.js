const calcH = (rgb, min, max) => {
  if (min === max) {
      return 0;
  }
  if (rgb.r === max) {
      return 60 * (0+(rgb.g-rgb.b)/(max-min)) % 360;
  }
  if (rgb.g === max) {
      return 60 * (2+(rgb.b-rgb.r)/(max-min)) % 360;
  }
  return 60 * (4+(rgb.r-rgb.g)/(max-min)) % 360;
};
const calcS = (min, max) => max > 0 ? (1-min/max) * 100 : 0;
const calcV = (max) => max / 255 * 100;

const rgbToHsv = (rgb) => {
  const colorValues = Object.values(rgb); 
  const min = Math.min(...colorValues);
  const max = Math.max(...colorValues);
  const h = calcH(rgb, min, max);
  const s = calcS(min, max);
  const v = calcV(max);
  return {h, s, v};
};

console.log(rgbToHsv({ r: 255, g: 255, b: 255 }));
console.log(rgbToHsv({ r: 0, g: 0, b: 0 }));
console.log(rgbToHsv({ r: 255, g: 0, b: 0 }));
console.log(rgbToHsv({ r: 0, g: 255, b: 0 }));
console.log(rgbToHsv({r: 0, g: 0, b: 255}));
console.log(rgbToHsv({ r: 171, g: 205, b: 239 }));
