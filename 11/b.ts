import { generateNextPassword } from "./passwordGenerator.ts";

const input = "hepxcrrq";

function solve(input: string) {
  const resultA = generateNextPassword(input);
  const resultB = generateNextPassword(resultA);
  return resultB;
}

console.info(solve(input));
