const nextLetter = {
  "a": "b",
  "b": "c",
  "c": "d",
  "d": "e",
  "e": "f",
  "f": "g",
  "g": "h",
  "h": "j",
  "i": "j",
  "j": "k",
  "k": "m",
  "l": "m",
  "m": "n",
  "n": "p",
  "o": "p",
  "p": "q",
  "q": "r",
  "r": "s",
  "s": "t",
  "t": "u",
  "u": "v",
  "v": "w",
  "w": "x",
  "x": "y",
  "y": "z",
  "z": "a",
};

export function hasIncreasing3(password: string): boolean {
  const charCodes = password.split("").map((x) => x.charCodeAt(0));
  let hasIncreasing3 = false;

  for (let i = 0; i < charCodes.length - 2; i++) {
    if (
      charCodes[i] === charCodes[i + 1] - 1 &&
      charCodes[i] === charCodes[i + 2] - 2
    ) {
      hasIncreasing3 = true;
    }
  }

  return hasIncreasing3;
}

export function hasOnlyValidChars(password: string): boolean {
  const forbidden = ["i", "o", "l"];
  return forbidden.every((x) => !password.includes(x));
}

export function hasTwoNonOverlappingPairs(password: string): boolean {
  let amountOfPairs = 0;

  const chars = password.split("");
  for (let i = 0; i < chars.length - 1; i++) {
    const a = chars[i];
    const b = chars[i + 1];
    if (a === b) {
      amountOfPairs++;
      i++;
    }
  }

  return amountOfPairs >= 2;
}

export function nextPassword(password: string): string {
  const chars = password.split("");

  for (let i = chars.length - 1; i >= 0; i--) {
    const char = chars[i];

    chars[i] = nextLetter[chars[i] as keyof typeof nextLetter];

    if (char !== "z") {
      break;
    }
  }

  return chars.join("");
}

export function generateNextPassword(input: string): string {
  let password = nextPassword(input);
  while (true) {
    if (
      hasIncreasing3(password) &&
      hasOnlyValidChars(password) &&
      hasTwoNonOverlappingPairs(password)
    ) {
      return password;
    }

    password = nextPassword(password);
  }
}
