import {
  activeNeighbours,
  countLights,
  Grid,
  GRID_SIZE,
  parse,
} from "./grid.ts";

const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);

function animate(grid: Grid): Grid {
  const nextGrid: Grid = Array.from(
    { length: GRID_SIZE },
    () => Array.from({ length: GRID_SIZE }, () => false),
  );

  for (let y = 0; y < GRID_SIZE; y++) {
    const cells = grid[y];
    const nextGridCells = nextGrid[y];

    for (let x = 0; x < GRID_SIZE; x++) {
      const neighbours = activeNeighbours(grid, y, x);
      if (cells[x]) {
        // A light which is on stays on when 2 or 3 neighbors are on,
        // and turns off otherwise.
        nextGridCells[x] = neighbours === 2 || neighbours === 3;
      } else {
        // A light which is off turns on if exactly 3 neighbors are on,
        // and stays off otherwise.
        nextGridCells[x] = neighbours === 3;
      }
    }
  }

  return nextGrid;
}

function solve(input: string[]): number {
  let grid = parse(input);
  grid[0][0] = true;
  grid[0][GRID_SIZE - 1] = true;
  grid[GRID_SIZE - 1][0] = true;
  grid[GRID_SIZE - 1][GRID_SIZE - 1] = true;

  for (let i = 0; i < 100; i++) {
    grid = animate(grid);
    grid[0][0] = true;
    grid[0][GRID_SIZE - 1] = true;
    grid[GRID_SIZE - 1][0] = true;
    grid[GRID_SIZE - 1][GRID_SIZE - 1] = true;
  }

  return countLights(grid);
}

// 2119 is too high
console.info(solve(input));
