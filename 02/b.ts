const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);

function solve(input: string[]): number {
  let total = 0;

  input.forEach((line) => {
    const [l, w, h] = line.split("x").map(Number);
    const volume = l * w * h;

    const permA = 2 * l + 2 * w;
    const permB = 2 * w + 2 * h;
    const permC = 2 * h + 2 * l;

    const smallestPerm = Math.min(permA, permB, permC);
    total += smallestPerm + volume;
  });

  return total;
}

console.info(solve(input));
