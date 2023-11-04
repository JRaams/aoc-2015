import { calculateSmallestQuantumEntanglement } from "./weight.ts";

async function solve(): Promise<number> {
  const lines: string = await Deno.readTextFile("./input.txt");
  const packages: number[] = lines.split("\n").filter((l) => l).map(Number);

  return calculateSmallestQuantumEntanglement(packages, 3);
}

console.info(await solve());
