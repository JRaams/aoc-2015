import { replaceAt } from "../utils/strings.ts";

const lines: string = await Deno.readTextFile("./input.txt");

type Replacement = {
  input: string;
  output: string;
};

function parse(input: string) {
  const replacements: Replacement[] = [];

  const [replacementStr, entrypointLine] = input.split("\n\n");
  replacementStr.split("\n").forEach((line) => {
    const [input, output] = line.split(" => ");
    replacements.push({ input, output });
  });

  return { replacements, entrypoint: entrypointLine.trim() };
}

function solve(input: string): number {
  const { replacements, entrypoint } = parse(input);

  let molecule = entrypoint;
  let stepsToElectron = 0;

  while (!molecule.match(/^e+$/)) {
    for (const { input, output } of replacements) {
      if (molecule.includes(output)) {
        molecule = replaceAt(
          molecule,
          output,
          input,
          molecule.indexOf(output),
        );
        stepsToElectron++;
      }
    }
  }

  return stepsToElectron;
}

console.info(solve(lines));
