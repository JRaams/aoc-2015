const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);

function solve(input: string[]): number {
  let total = 0;

  input.forEach((line) => {
    const [l, w, h] = line.split("x").map(Number);

    const sideA = l * w;
    const sideB = w * h;
    const sideC = h * l;

    const smallestSide = Math.min(sideA, sideB, sideC);
    total += 2 * sideA + 2 * sideB + 2 * sideC + smallestSide;
  });

  return total;
}

console.info(solve(input));
