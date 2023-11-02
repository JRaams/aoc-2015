const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);

type Action = "turn on" | "turn off" | "toggle";

type Instruction = {
  action: Action;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
};

class Grid {
  fields: number[][];
  size = 1000;

  constructor() {
    this.fields = [];
    for (let y = 0; y < this.size; y++) {
      this.fields[y] = [];
      for (let x = 0; x < this.size; x++) {
        this.fields[y][x] = 0;
      }
    }
  }

  applyInstruction(instruction: Instruction) {
    for (let y = instruction.startY; y <= instruction.endY; y++) {
      for (let x = instruction.startX; x <= instruction.endX; x++) {
        if (instruction.action === "turn on") {
          this.fields[y][x] += 1;
        } else if (instruction.action === "turn off") {
          this.fields[y][x] = Math.max(this.fields[y][x] - 1, 0);
        } else if (instruction.action === "toggle") {
          this.fields[y][x] += 2;
        }
      }
    }
  }

  getLitLights() {
    let lit = 0;

    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        lit += this.fields[y][x];
      }
    }

    return lit;
  }
}

const instructionRegex = /([a-z ]*) (\d*,\d*) through (\d*,\d*)/;

function loadInstuction(line: string): Instruction {
  const [_, action, start, end] = line.match(instructionRegex)!;
  const [startX, startY] = start.split(",").map(Number);
  const [endX, endY] = end.split(",").map(Number);

  return {
    action: action as Action,
    startX,
    startY,
    endX,
    endY,
  };
}

function solve(input: string[]): number {
  const grid = new Grid();

  const instructions = input.map(loadInstuction);
  for (const instruction of instructions) {
    grid.applyInstruction(instruction);
  }

  return grid.getLitLights();
}

console.info(solve(input));
