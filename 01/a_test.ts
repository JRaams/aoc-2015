import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";
import { calculateFloor } from "./a.ts";

const testCases = [
  { input: "(())", result: 0 },
  { input: "()()", result: 0 },
  { input: "(((", result: 3 },
  { input: "(()(()(", result: 3 },
  { input: "))(((((", result: 3 },
  { input: "())", result: -1 },
  { input: "))(", result: -1 },
  { input: ")))", result: -3 },
  { input: ")())())", result: -3 },
];

Deno.test("calculateFloor", () => {
  testCases.forEach(({ input, result }) => {
    assertEquals(calculateFloor(input), result);
  });
});
