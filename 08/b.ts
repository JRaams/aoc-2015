const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);

function solve(input: string[]): number {
  let stringCharCount = 0;
  let escapedCharCount = 0;

  input.forEach((line) => {
    stringCharCount += line.length;
    escapedCharCount += JSON.stringify(line).length;
  });

  return escapedCharCount - stringCharCount;
}

console.info(solve(input));
