import { parse } from "./aunt.ts";

const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);

function solve(input: string[]): number {
  const aunts = parse(input);

  for (let i = 0; i < aunts.length; i++) {
    const aunt = aunts[i];
    if (aunt.children !== null && aunt.children !== 3) continue;
    if (aunt.cats !== null && aunt.cats <= 7) continue;
    if (aunt.samoyeds !== null && aunt.samoyeds !== 2) continue;
    if (aunt.pomeranians !== null && aunt.pomeranians >= 3) continue;
    if (aunt.akitas !== null && aunt.akitas !== 0) continue;
    if (aunt.vizslas !== null && aunt.vizslas !== 0) continue;
    if (aunt.goldfish !== null && aunt.goldfish >= 5) continue;
    if (aunt.trees !== null && aunt.trees <= 3) continue;
    if (aunt.cars !== null && aunt.cars !== 2) continue;
    if (aunt.perfumes !== null && aunt.perfumes !== 1) continue;

    return aunt.id;
  }

  return 0;
}

console.info(solve(input));
