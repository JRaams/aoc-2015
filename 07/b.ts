import { Circuit, Value } from "./gate.ts";

const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);

function solve(input: string[]): number {
  const circuitA = new Circuit();
  circuitA.loadWires(input);
  circuitA.loadWireSources(input);
  circuitA.loadGates(input);

  const wireASignal = circuitA.wires.get("a")?.calculateSignal();
  if (!wireASignal) {
    console.error("Could not calculate signal for wire a");
    return 0;
  }

  const circuitB = new Circuit();
  circuitB.loadWires(input);
  circuitB.loadWireSources(input);
  circuitB.loadGates(input);

  const wireB = circuitB.wires.get("b");
  if (!wireB) {
    console.error("Could not get wire b");
    return 0;
  }
  wireB.source = new Value(wireASignal);

  return circuitB.wires.get("a")?.calculateSignal() ?? 0;
}

console.info(solve(input));
