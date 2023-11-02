const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);

class Str {
  hasOverlappingPairs = false;
  containsRepeatingLetter = false;

  constructor(value: string) {
    const letters = value.split("");
    const letterPairs = new Set<string>();

    for (let i = 0; i < letters.length; i++) {
      const letterI = letters.at(i);
      const letterJ = letters.at(i + 1);
      const letterK = letters.at(i + 2);

      // ... but not like aaa (aa, but it overlaps).
      if (letterI === letterJ && letterI === letterK) {
        i++;
      }

      // It contains a pair of any two letters that appears at least twice in
      // the string without overlapping, like xyxy (xy) or aabcdefgaa (aa) ...
      if (letterJ) {
        const pair = letterI + letterJ;

        if (letterPairs.has(pair)) {
          this.hasOverlappingPairs = true;
        } else {
          letterPairs.add(pair);
        }
      }

      // It contains at least one letter which repeats with exactly one letter
      // between them, like xyx, abcdefeghi (efe), or even aaa.
      if (letterI === letterK) {
        this.containsRepeatingLetter = true;
      }
    }
  }

  get isNice() {
    return this.hasOverlappingPairs && this.containsRepeatingLetter;
  }
}

function solve(input: string[]): number {
  const strs = input.map((x) => new Str(x));
  return strs.filter((x) => x.isNice).length;
}

console.info(solve(input));
