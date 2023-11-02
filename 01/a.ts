const lines: string = await Deno.readTextFile("./input.txt");

export function calculateFloor(instructions: string): number {
  let floor = 0;
  instructions.split("").forEach((i) => {
    floor += i === "(" ? 1 : -1;
  });
  return floor;
}

console.info(calculateFloor(lines));
