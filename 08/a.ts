const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);

function solve(input: string[]): number {
  let stringCharCount = 0;
  let memoryCharCount = 0;

  input.forEach((line) => {
    stringCharCount += line.length;
    memoryCharCount += eval(line).length;
  });

  return stringCharCount - memoryCharCount;
}

console.info(solve(input));
