type Aunt = {
  id: number;
  children: number | null;
  cats: number | null;
  samoyeds: number | null;
  pomeranians: number | null;
  akitas: number | null;
  vizslas: number | null;
  goldfish: number | null;
  trees: number | null;
  cars: number | null;
  perfumes: number | null;
};

export function parse(input: string[]): Aunt[] {
  const aunts: Aunt[] = [];

  input.forEach((line, i) => {
    const aunt: Aunt = {
      id: i + 1,
      children: null,
      cats: null,
      samoyeds: null,
      pomeranians: null,
      akitas: null,
      vizslas: null,
      goldfish: null,
      trees: null,
      cars: null,
      perfumes: null,
    };

    const compoundString = line.split(/Sue \d+: /)[1];
    compoundString.split(", ").forEach((x) => {
      const [key, value] = x.split(": ");
      aunt[key as keyof Aunt] = Number(value);
    });

    aunts.push(aunt);
  });

  return aunts;
}
