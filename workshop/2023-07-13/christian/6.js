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

const hsvToRgb = (hsv) => {
  const h = hsv.h / 360;
  const s = hsv.s / 100;
  const v = hsv.v / 100;
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);

  let r, g, b;
  switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
  }

  return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
  };
};

const calculateComplementaryHsv = (hsv) => (
  {...hsv, h: (hsv.h + 180) % 360 }
);

const calculateComplementaryHex = (hex) => {
  const rgb = hexToRgb(hex);
  const hsv = rgbToHsv(rgb);
  const complementaryHsv = calculateComplementaryHsv(hsv);
  const complementaryRgb = hsvToRgb(complementaryHsv);
  return rgbToHex(complementaryRgb);
}

console.log(calculateComplementaryHex('FFFFFF'));
console.log(calculateComplementaryHex('000000'));
console.log(calculateComplementaryHex('FF0000'));
console.log(calculateComplementaryHex('00FF00'));
console.log(calculateComplementaryHex('0000FF'));
console.log(calculateComplementaryHex('ABCDEF'));
