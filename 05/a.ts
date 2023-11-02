const lines: string = await Deno.readTextFile("./input.txt");
const input: string[] = lines.split("\n").filter((l) => l);

const vowels = ["a", "e", "i", "o", "u"];
const forbidden = ["ab", "cd", "pq", "xy"];

class Str {
  hasThreeVowels = false;
  hasDoubleLetter = false;
  hasForbidden = false;

  constructor(value: string) {
    const letters = value.split("");
    let vowelCount = 0;

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];

      if (vowels.includes(letter)) {
        vowelCount++;
      }

      if (letter === letters.at(i + 1)) {
        this.hasDoubleLetter = true;
      }
    }

    if (vowelCount >= 3) {
      this.hasThreeVowels = true;
    }

    for (const word of forbidden) {
      if (value.includes(word)) {
        this.hasForbidden = true;
        break;
      }
    }
  }

  get isNice() {
    return this.hasThreeVowels && this.hasDoubleLetter && !this.hasForbidden;
  }
}

function solve(input: string[]): number {
  const strs = input.map((x) => new Str(x));
  return strs.filter((x) => x.isNice).length;
}

console.info(solve(input));
