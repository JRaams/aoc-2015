const lines: string = await Deno.readTextFile("./input.txt");
const input = JSON.parse(lines.split("\n")[0]);

function countValues(obj: any): number {
  let count = 0;

  if (!Array.isArray(obj) && Object.values(obj).includes("red")) {
    return 0;
  }

  for (const key in obj) {
    if (typeof obj[key] === "object") {
      count += countValues(obj[key]);
    } else {
      const number = Number(obj[key]);
      if (!isNaN(number)) {
        count += number;
      }
    }
  }

  return count;
}

function solve(input: any): number {
  return countValues(input);
}

console.info(solve(input));
