import { runProgram } from "./computer.ts";

async function solve(): Promise<number> {
  const lines: string = await Deno.readTextFile("./input.txt");
  const input: string[] = lines.split("\n").filter((l) => l);

  const registers: Record<string, number> = {
    a: 0,
    b: 0,
  };

  return runProgram(registers, input).b;
}

console.info(await solve());
