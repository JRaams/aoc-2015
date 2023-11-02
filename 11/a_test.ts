import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";
import {
  generateNextPassword,
  hasIncreasing3,
  hasOnlyValidChars,
  hasTwoNonOverlappingPairs,
  nextPassword,
} from "./passwordGenerator.ts";

Deno.test("hasIncreasing3 hijklmmn should be true", () => {
  const input = "hijklmmn";
  const expected = true;

  const result = hasIncreasing3(input);

  assertEquals(result, expected);
});

Deno.test("hasIncreasing3 abbceffg should be false", () => {
  const input = "abbceffg";
  const expected = false;

  const result = hasIncreasing3(input);

  assertEquals(result, expected);
});

Deno.test("hasOnlyValidChars hijklmmn should be false", () => {
  const input = "hijklmmn";
  const expected = false;

  const result = hasOnlyValidChars(input);

  assertEquals(result, expected);
});

Deno.test("hasOnlyValidChars abcdffaa should be true", () => {
  const input = "abcdffaa";
  const expected = true;

  const result = hasOnlyValidChars(input);

  assertEquals(result, expected);
});

Deno.test("hasTwoNonOverlappingPairs abbceffg should be true", () => {
  const input = "abbceffg";
  const expected = true;

  const result = hasTwoNonOverlappingPairs(input);

  assertEquals(result, expected);
});

Deno.test("hasTwoNonOverlappingPairs abbcegjk should be false", () => {
  const input = "abbcegjk";
  const expected = false;

  const result = hasTwoNonOverlappingPairs(input);

  assertEquals(result, expected);
});

Deno.test("hasTwoNonOverlappingPairs abcdffaa should be true", () => {
  const input = "abcdffaa";
  const expected = true;

  const result = hasTwoNonOverlappingPairs(input);

  assertEquals(result, expected);
});

Deno.test("hasTwoNonOverlappingPairs abcdfffa should be false", () => {
  const input = "abcdfffa";
  const expected = false;

  const result = hasTwoNonOverlappingPairs(input);

  assertEquals(result, expected);
});

Deno.test("nextPassword abcdefgh becomes abcdefgj", () => {
  const input = "abcdefgh";
  const expected = "abcdefgj";

  const result = nextPassword(input);

  assertEquals(result, expected);
});

Deno.test("nextPassword ghijklma becomes ghijklmb", () => {
  const input = "ghijklma";
  const expected = "ghijklmb";

  const result = nextPassword(input);

  assertEquals(result, expected);
});

Deno.test("nextPassword ghijklmz becomes ghijklna", () => {
  const input = "ghijklmz";
  const expected = "ghijklna";

  const result = nextPassword(input);

  assertEquals(result, expected);
});

Deno.test("nextPassword ghijklzz becomes ghijkmaa", () => {
  const input = "ghijklzz";
  const expected = "ghijkmaa";

  const result = nextPassword(input);

  assertEquals(result, expected);
});

Deno.test("generateNextPassword abcdefgh becomes abcdffaa", () => {
  const input = "abcdefgh";
  const expected = "abcdffaa";

  const result = generateNextPassword(input);

  assertEquals(result, expected);
});

Deno.test("generateNextPassword ghijklmn becomes ghjaabcc", () => {
  const input = "ghijklmn";
  const expected = "ghjaabcc";

  const result = generateNextPassword(input);

  assertEquals(result, expected);
});
