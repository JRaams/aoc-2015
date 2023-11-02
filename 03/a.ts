const line: string = await Deno.readTextFile("./input.txt");

function solve(input: string): number {
  let x = 0;
  let y = 0;
  const visited = new Set<string>();
  visited.add(x + "_" + y);

  input.split("").forEach((char) => {
    switch (char) {
      case ">": {
        x++;
        break;
      }
      case "<": {
        x--;
        break;
      }
      case "^": {
        y--;
        break;
      }
      case "v": {
        y++;
        break;
      }

      default:
        break;
    }

    visited.add(x + "_" + y);
  });

  return visited.size;
}

console.info(solve(line));
