const input = "1113122113";

export function generateSequence(input: string): string {
  let next = "";

  const chars = input.split("");
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    let count = 1;
    let nextChar = chars[i + count];
    while (nextChar === char) {
      count++;
      nextChar = chars[i + count];
    }

    next += count;
    next += char;
    i += count - 1;
  }

  return next;
}

function solve(input: string): number {
  let result = input;

  for (let i = 0; i < 50; i++) {
    result = generateSequence(result);
  }

  return result.length;
}

console.info(solve(input));
