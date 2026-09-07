/**
 * Port of the `ethereum-blockies` identicon (the algorithm behind
 * `react-blockies`, which the frontend renders next to every address).
 *
 * The frontend draws it on a canvas; here it is a pure function that returns an
 * inline SVG, so it works at build time with no DOM and no dependency. Same
 * seed (the lowercased address) gives the same picture in both places.
 */

export type BlockieCells = {
  size: number;
  data: number[];
  color: string;
  bgcolor: string;
  spotcolor: string;
};

function makeRng(seed: string) {
  const randseed = [0, 0, 0, 0];
  for (let i = 0; i < seed.length; i++) {
    randseed[i % 4] = (randseed[i % 4] << 5) - randseed[i % 4] + seed.charCodeAt(i);
  }
  return () => {
    const t = randseed[0] ^ (randseed[0] << 11);
    randseed[0] = randseed[1];
    randseed[1] = randseed[2];
    randseed[2] = randseed[3];
    randseed[3] = randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8);
    return (randseed[3] >>> 0) / ((1 << 31) >>> 0);
  };
}

function createColor(rand: () => number): string {
  const h = Math.floor(rand() * 360);
  const s = Math.floor(rand() * 60 + 40);
  const l = Math.floor((rand() + rand() + rand() + rand()) * 25);
  return `hsl(${h},${s}%,${l}%)`;
}

/** The raw grid: `data[y * size + x]` is 0 (background), 1 (color) or 2 (spot). */
export function blockieCells(seed: string, size = 8): BlockieCells {
  const rand = makeRng(seed.toLowerCase());
  const color = createColor(rand);
  const bgcolor = createColor(rand);
  const spotcolor = createColor(rand);

  const dataWidth = Math.ceil(size / 2);
  const mirrorWidth = size - dataWidth;
  const data: number[] = [];
  for (let y = 0; y < size; y++) {
    const row: number[] = [];
    for (let x = 0; x < dataWidth; x++) row[x] = Math.floor(rand() * 2.3);
    const mirrored = row.slice(0, mirrorWidth).reverse();
    data.push(...row, ...mirrored);
  }
  return { size, data, color, bgcolor, spotcolor };
}

/**
 * Inline SVG at `px` pixels. The frontend uses `scale=4, size=px/4`, so a 20px
 * avatar is a 5x5 grid; this keeps that ratio.
 */
export function blockieSvg(seed: string, px = 20): string {
  const size = Math.max(1, Math.round(px / 4));
  const { data, color, bgcolor, spotcolor } = blockieCells(seed, size);
  const rects: string[] = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 0) continue;
    const x = i % size;
    const y = Math.floor(i / size);
    rects.push(`<rect x="${x}" y="${y}" width="1" height="1" fill="${data[i] === 1 ? color : spotcolor}"/>`);
  }
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${px}" height="${px}" viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges" aria-hidden="true">` +
    `<rect width="${size}" height="${size}" fill="${bgcolor}"/>${rects.join('')}</svg>`
  );
}
