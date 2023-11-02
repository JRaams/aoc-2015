const wireRegex = /^(\w+) -> (\w+)$/;
const andRegex = /^(\w*) AND (\w*) -> (\w*)$/;
const lshiftRegex = /^(\w*) LSHIFT (\w*) -> (\w*)$/;
const notRegex = /^NOT (\w*) -> (\w*)$/;
const orRegex = /^(\w*) OR (\w*) -> (\w*)$/;
const rshiftRegex = /^(\w*) RSHIFT (\w*) -> (\w*)$/;
const SIGNAL_RANGE = 65536;

interface SignalSource {
  calculateSignal(): number | null;
  _cachedValue: number | null;
}

export class Value implements SignalSource {
  value: number | null;
  _cachedValue: number | null;

  constructor(value: number | null) {
    this.value = value;
    this._cachedValue = value;
  }

  calculateSignal(): number | null {
    return this.value;
  }
}

class Wire implements SignalSource {
  line: string; // 123 -> x
  identifier: string; // x
  source?: SignalSource;
  _cachedValue: number | null;

  constructor(line: string, id: string) {
    this.line = line;
    this.identifier = id;
    this._cachedValue = null;
  }

  calculateSignal(): number | null {
    if (this._cachedValue !== null) return this._cachedValue;
    if (!this.source) return null;

    const signal = this.source.calculateSignal();
    this._cachedValue = signal;
    return signal;
  }
}

type Operation = "AND" | "LSHIFT" | "NOT" | "OR" | "RSHIFT";

class Gate implements SignalSource {
  line: string;
  operation: Operation;
  inputA: SignalSource;
  inputB: SignalSource | null;
  _cachedValue: number | null;

  constructor(
    l: string,
    o: Operation,
    inputA: SignalSource,
    inputB: SignalSource | null,
  ) {
    this.line = l;
    this.operation = o;
    this.inputA = inputA;
    this.inputB = inputB;
    this._cachedValue = null;
  }

  calculateSignal(): number | null {
    if (this._cachedValue !== null) return this._cachedValue;
    const signalA = this.inputA.calculateSignal();
    const signalB = this.inputB?.calculateSignal() ?? null;

    switch (this.operation) {
      case "AND": {
        if (signalA === null || signalB === null) return null;
        const signal = signalA & signalB;
        this._cachedValue = signal;
        break;
      }
      case "LSHIFT": {
        if (signalA === null || signalB === null) return null;
        const signal = signalA << signalB;
        this._cachedValue = signal;
        break;
      }
      case "NOT": {
        if (signalA === null) return null;
        const signal = ~signalA + SIGNAL_RANGE;
        this._cachedValue = signal;
        break;
      }
      case "OR": {
        if (signalA === null || signalB === null) return null;
        const signal = signalA | signalB;
        this._cachedValue = signal;
        break;
      }
      case "RSHIFT": {
        if (signalA === null || signalB === null) return null;
        const signal = signalA >> signalB;
        this._cachedValue = signal;
        break;
      }
    }

    return this._cachedValue;
  }
}

export class Circuit {
  wires: Map<string, Wire>;
  gates: Gate[];

  constructor() {
    this.wires = new Map<string, Wire>();
    this.gates = [];
  }

  loadWires(input: string[]) {
    for (const line of input) {
      const match = line.match(wireRegex);

      if (match) {
        // 123 -> x
        const [_, _2, identifier] = match;

        this.wires.set(identifier, new Wire(line, identifier));
      } else {
        // x AND y -> d
        const [_, name] = line.split(" -> ");

        this.wires.set(name, new Wire(line, name));
      }
    }
  }

  loadWireSources(input: string[]) {
    for (const line of input) {
      const match = line.match(wireRegex);
      if (!match) continue;

      const [_, signal, identifier] = match;

      const wire = this.wires.get(identifier);
      if (!wire) continue;

      if (isNaN(Number(signal))) {
        wire.source = this.wires.get(signal);
      } else {
        wire.source = new Value(Number(signal));
      }
    }
  }

  loadGates(input: string[]) {
    input.forEach((line) => {
      const andMatch = line.match(andRegex);
      if (andMatch) {
        const [_, inputA, inputB, output] = andMatch;
        const outputWire = this.wires.get(output)!;

        const gate = new Gate(
          line,
          "AND",
          this.wires.get(inputA) ?? new Value(Number(inputA)),
          this.wires.get(inputB)!,
        );
        outputWire.source = gate;

        this.gates.push(gate);
        return;
      }

      const lshiftMatch = line.match(lshiftRegex);
      if (lshiftMatch) {
        const [_, inputA, value, output] = lshiftMatch;
        const outputWire = this.wires.get(output)!;

        const gate = new Gate(
          line,
          "LSHIFT",
          this.wires.get(inputA)!,
          new Value(Number(value)),
        );
        outputWire.source = gate;

        this.gates.push(gate);
        return;
      }

      const notMatch = line.match(notRegex);
      if (notMatch) {
        const [_, input, output] = notMatch;
        const outputWire = this.wires.get(output)!;

        const gate = new Gate(
          line,
          "NOT",
          this.wires.get(input)!,
          null,
        );
        outputWire.source = gate;

        this.gates.push(gate);
        return;
      }

      const orMatch = line.match(orRegex);
      if (orMatch) {
        const [_, inputA, inputB, output] = orMatch;
        const outputWire = this.wires.get(output)!;

        const gate = new Gate(
          line,
          "OR",
          this.wires.get(inputA)!,
          this.wires.get(inputB)!,
        );
        outputWire.source = gate;

        this.gates.push(gate);
        return;
      }

      const rshiftMatch = line.match(rshiftRegex);
      if (rshiftMatch) {
        const [_, inputA, value, output] = rshiftMatch;
        const outputWire = this.wires.get(output)!;

        const gate = new Gate(
          line,
          "RSHIFT",
          this.wires.get(inputA)!,
          new Value(Number(value)),
        );
        outputWire.source = gate;

        this.gates.push(gate);
        return;
      }
    });
  }
}
