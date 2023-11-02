import { permute } from "../utils/permute.ts";

const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);

type Distances = Map<string, Map<string, number>>;

function load(input: string[]): { places: Set<string>; distances: Distances } {
  const places = new Set<string>();
  const distances = new Map<string, Map<string, number>>();

  input.forEach((line) => {
    const [_, source, destination, distance] = line.match(
      /^(\w*) to (\w*) = (\d*)$/,
    )!;
    places.add(source);
    places.add(destination);

    let distancesSource = distances.get(source);
    if (!distancesSource) {
      distancesSource = new Map();
      distances.set(source, distancesSource);
    }
    distancesSource.set(destination, Number(distance));

    let distancesDestination = distances.get(destination);
    if (!distancesDestination) {
      distancesDestination = new Map();
      distances.set(destination, distancesDestination);
    }
    distancesDestination.set(source, Number(distance));
  });

  return { places, distances };
}

function solve(input: string[]): number {
  const { places, distances } = load(input);

  let shortest = Number.MAX_SAFE_INTEGER;

  for (const permutation of permute(Array.from(places))) {
    let distance = 0;

    for (let i = 0; i < permutation.length - 1; i++) {
      const city1 = permutation.at(i)!;
      const city2 = permutation.at(i + 1)!;
      distance += distances.get(city1)?.get(city2) ?? 0;
    }

    shortest = Math.min(shortest, distance);
  }

  return shortest;
}

console.info(solve(input));
