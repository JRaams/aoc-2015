const lines: string = await Deno.readTextFile("./input.txt");

export function calculateFloor(instructions: string): number {
  let floor = 0;

  for (let i = 0; i < instructions.length; i++) {
    floor += instructions[i] === "(" ? 1 : -1;
    if (floor === -1) {
      return i + 1;
    }
  }

  return floor;
}

console.info(calculateFloor(lines));
