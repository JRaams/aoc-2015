import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";
import { generateSequence } from "./a.ts";

Deno.test("generateSequence 1 becomes 11", () => {
  const input = "1";
  const expected = "11";

  const result = generateSequence(input);

  assertEquals(result, expected);
});

Deno.test("generateSequence 11 becomes 21", () => {
  const input = "11";
  const expected = "21";

  const result = generateSequence(input);

  assertEquals(result, expected);
});

Deno.test("generateSequence 21 becomes 1211", () => {
  const input = "21";
  const expected = "1211";

  const result = generateSequence(input);

  assertEquals(result, expected);
});

Deno.test("generateSequence 1211 becomes 111221", () => {
  const input = "1211";
  const expected = "111221";

  const result = generateSequence(input);

  assertEquals(result, expected);
});

Deno.test("generateSequence 111221 becomes 312211", () => {
  const input = "111221";
  const expected = "312211";

  const result = generateSequence(input);

  assertEquals(result, expected);
});
