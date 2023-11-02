import { Circuit } from "./gate.ts";

const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);

function solve(input: string[]): number {
  const circuit = new Circuit();
  circuit.loadWires(input);
  circuit.loadWireSources(input);
  circuit.loadGates(input);

  return circuit.wires.get("a")?.calculateSignal() ?? 0;
}

console.info(solve(input));
