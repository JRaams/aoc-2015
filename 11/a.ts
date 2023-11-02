import { generateNextPassword } from "./passwordGenerator.ts";

const input = "hepxcrrq";

function solve(input: string) {
  const result = generateNextPassword(input);
  return result;
}

console.info(solve(input));
