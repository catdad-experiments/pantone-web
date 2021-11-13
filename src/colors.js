import * as pantone from 'https://cdn.jsdelivr.net/npm/pantone-table@1.0.0-rc1/dist/pantone-table.es.js';

const colors = {};

for (const key in pantone) {
  const name = key.replace(/^pantone_/, '').replace(/_/g, '');
  colors[name] = pantone[key];
}

export default colors;
