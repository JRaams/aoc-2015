const line: string = await Deno.readTextFile("./input.txt");

class Pos {
  x: number;
  y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  get addr(): string {
    return this.x + "_" + this.y;
  }

  move(c: string): void {
    switch (c) {
      case ">": {
        this.x++;
        break;
      }
      case "<": {
        this.x--;
        break;
      }
      case "^": {
        this.y--;
        break;
      }
      case "v": {
        this.y++;
        break;
      }
    }
  }
}

function solve(input: string): number {
  const santa = new Pos();
  const robo = new Pos();

  const visited = new Set<string>();
  visited.add(santa.addr);

  input.split("").forEach((char, i) => {
    const isSanta = i % 2 === 0;

    if (isSanta) {
      santa.move(char);
      visited.add(santa.addr);
    } else {
      robo.move(char);
      visited.add(robo.addr);
    }
  });

  return visited.size;
}

console.info(solve(line));
