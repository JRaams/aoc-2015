export type Registers = Record<string, number>;

export function runProgram(registers: Registers, instructions: string[]): Registers {
  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    if (instruction.startsWith("hlf")) {
      const register = instruction.charAt(4);
      registers[register] /= 2;
    } else if (instruction.startsWith("tpl")) {
      const register = instruction.charAt(4);
      registers[register] *= 3;
    } else if (instruction.startsWith("inc")) {
      const register = instruction.charAt(4);
      registers[register]++;
    } else if (instruction.startsWith("jmp")) {
      const offset = Number(instruction.split(" ")[1]);
      i += offset - 1;
    } else if (instruction.startsWith("jie")) {
      const [_, register, offset] = instruction.replace(",", "").split(" ");
      if (registers[register] % 2 === 0) {
        i += Number(offset) - 1;
      }
    } else if (instruction.startsWith("jio")) {
      const [_, register, offset] = instruction.replace(",", "").split(" ");
      if (registers[register] === 1) {
        i += Number(offset) - 1;
      }
    }
  }

  return registers;
}
