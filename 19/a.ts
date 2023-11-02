import { replaceAt } from "../utils/strings.ts";

const lines: string = await Deno.readTextFile("./input.txt");

type Replacement = {
  input: string;
  output: string;
};

function parse(input: string) {
  const replacements: Replacement[] = [];

  const [replacementStr, entrypoint] = input.split("\n\n");
  replacementStr.split("\n").forEach((line) => {
    const [input, output] = line.split(" => ");
    replacements.push({ input, output });
  });

  return { replacements, entrypoint };
}

function solve(input: string): number {
  const { replacements, entrypoint } = parse(input);
  const molecules = new Set<string>();

  for (const { input, output } of replacements) {
    let i = 0;
    while ((i = entrypoint.indexOf(input, i)) >= 0) {
      molecules.add(replaceAt(entrypoint, input, output, i));
      i += input.length;
    }
  }

  return molecules.size;
}

console.info(solve(lines));
