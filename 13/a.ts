import { permute } from "../utils/permute.ts";

const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);

type Distances = Map<string, Map<string, number>>;

function load(input: string[]): { guests: Set<string>; distances: Distances } {
  const guests = new Set<string>();
  const distances = new Map<string, Map<string, number>>();

  input.forEach((line) => {
    const [_, source, posNeg, amount, destination] = line.match(
      /^(\w+) would (\w+) (\d+) happiness units by sitting next to (\w+).$/,
    )!;
    guests.add(source);
    guests.add(destination);

    const value = (posNeg === "gain" ? 1 : -1) * Number(amount);

    let distancesSource = distances.get(source);
    if (!distancesSource) {
      distancesSource = new Map();
      distances.set(source, distancesSource);
    }
    distancesSource.set(destination, value);
  });

  return { guests, distances };
}

function solve(input: string[]): number {
  const { guests, distances } = load(input);

  let highest = 0;

  for (const permutation of permute(Array.from(guests))) {
    let arrangementScore = 0;
    for (let i = 0; i < permutation.length; i++) {
      const guest = permutation[i];
      const leftGuest = permutation.at(i - 1)!;
      const rightGuest = permutation.at((i + 1) % permutation.length)!;

      arrangementScore += distances.get(guest)!.get(leftGuest)!;
      arrangementScore += distances.get(guest)!.get(rightGuest)!;
    }

    highest = Math.max(highest, arrangementScore);
  }

  return highest;
}

console.info(solve(input));
