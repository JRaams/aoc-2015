const input = 34000000;

function solve(input: number): number {
  const size = input / 10;
  const presentsPerHouse = new Array(size).fill(0); // 13 MB in memory is ok i guess

  for (let elf = 1; elf < size; elf++) {
    for (let house = 0; house < size - 1; house += elf) {
      presentsPerHouse[house] += 10 * elf;
    }
  }

  return presentsPerHouse.findIndex((x, i) => i > 1 && x >= input);
}

console.info(solve(input));
