const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);

const time = 2503;
const regex =
  /^(\w+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds.$/;

type Reindeer = {
  name: string;
  speed: number;
  time: number;
  rest: number;
};

function parse(input: string[]): Reindeer[] {
  const reindeer: Reindeer[] = [];

  input.forEach((line) => {
    const [_, name, speed, time, rest] = line.match(regex)!;
    reindeer.push({
      name,
      speed: Number(speed),
      time: Number(time),
      rest: Number(rest),
    });
  });

  return reindeer;
}

function solve(input: string[]): number {
  const reindeer = parse(input);

  let furthest = 0;

  reindeer.forEach((r) => {
    const period = r.time + r.rest;

    let distance = Math.floor(time / period) * (r.speed * r.time);

    const leftOverTime = Math.min(time % period, r.time);
    distance += r.speed * leftOverTime;

    furthest = Math.max(furthest, distance);
  });

  return furthest;
}

console.info(solve(input));
