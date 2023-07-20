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

console.log(hsvToRgb({ h: 0, s: 0, v: 100 }));
console.log(hsvToRgb({ h: 0, s: 0, v: 0 }));
console.log(hsvToRgb({ h: 0, s: 100, v: 100 }));
console.log(hsvToRgb({ h: 120, s: 100, v: 100 }));
console.log(hsvToRgb({ h: 240, s: 100, v: 100 }));
console.log(hsvToRgb({ h: 210, s: 28.45188284518828, v: 93.72549019607843 }));
