import { orderedCombinations } from "../utils/combinations.ts";

const lines: string = await Deno.readTextFile("./input.txt");
const input: number[] = lines.split("\n").filter((l) => l).map(Number);

function solve(input: number[]): number {
  let count = 0;

  for (const combination of orderedCombinations(input)) {
    const sum = combination.reduce((current, total) => total + current, 0);
    if (sum === 150) {
      count++;
    }
  }

  return count;
}

console.info(solve(input));
