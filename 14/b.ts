const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);

const time = 2503;
const regex =
  /^(\w+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds.$/;

class Reindeer {
  name: string;
  speed: number;
  time: number;
  rest: number;

  distance: number;
  points: number;
  restRemaining: number;
  runRemaining: number;

  constructor(name: string, speed: number, time: number, rest: number) {
    this.name = name;
    this.speed = speed;
    this.time = time;
    this.rest = rest;

    this.distance = 0;
    this.points = 0;
    this.restRemaining = 0;
    this.runRemaining = time;
  }

  tick(): void {
    if (this.restRemaining > 0) {
      this.restRemaining--;
      return;
    }

    this.runRemaining--;
    if (this.runRemaining === 0) {
      this.restRemaining = this.rest;
      this.runRemaining = this.time;
    }

    this.distance += this.speed;
  }
}

function parse(input: string[]): Reindeer[] {
  const reindeer: Reindeer[] = [];

  input.forEach((line) => {
    const [_, name, speed, time, rest] = line.match(regex)!;
    reindeer.push(
      new Reindeer(
        name,
        Number(speed),
        Number(time),
        Number(rest),
      ),
    );
  });

  return reindeer;
}

function solve(input: string[]): number {
  const reindeer = parse(input);

  for (let second = 0; second < time; second++) {
    reindeer.forEach((r) => r.tick());

    let max = 0;
    reindeer.forEach((r) => {
      if (r.distance > max) {
        max = r.distance;
      }
    });

    reindeer.filter((x) => x.distance === max).forEach((r) => r.points++);
  }

  reindeer.sort((a, b) => a.points > b.points ? -1 : 1);

  return reindeer[0].points;
}

console.info(solve(input));
