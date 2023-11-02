export const GRID_SIZE = 100;
export type Grid = boolean[][];

export function parse(input: string[]): Grid {
  const grid: Grid = Array.from(
    { length: GRID_SIZE },
    () => Array.from({ length: GRID_SIZE }, () => false),
  );

  for (let y = 0; y < GRID_SIZE; y++) {
    const cells = input[y];
    for (let x = 0; x < GRID_SIZE; x++) {
      const cell = cells[x];
      grid[y][x] = cell === "#";
    }
  }

  return grid;
}

export function activeNeighbours(grid: Grid, y: number, x: number): number {
  let count = 0;

  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dy === 0 && dx === 0) continue;

      const nY = y + dy;
      if (nY < 0 || nY >= GRID_SIZE) continue;

      const nX = x + dx;
      if (nX < 0 || nX >= GRID_SIZE) continue;

      if (grid[nY][nX]) count++;
    }
  }

  return count;
}

export function countLights(grid: Grid): number {
  let count = 0;

  for (let y = 0; y < GRID_SIZE; y++) {
    const cells = grid[y];
    for (let x = 0; x < GRID_SIZE; x++) {
      const cell = cells[x];
      if (cell) count++;
    }
  }

  return count;
}

function print(grid: Grid): void {
  console.info("======");
  for (let y = 0; y < GRID_SIZE; y++) {
    const cells = grid[y];
    let line = "";
    for (let x = 0; x < GRID_SIZE; x++) {
      const cell = cells[x];
      line += cell ? "#" : ".";
    }
    console.info(line);
  }
}
