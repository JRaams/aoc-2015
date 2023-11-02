import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";
import { calculateFloor } from "./b.ts";

const testCases = [
  { input: ")", result: 1 },
  { input: "()())", result: 5 },
];

Deno.test("calculateFloor", () => {
  testCases.forEach(({ input, result }) => {
    assertEquals(calculateFloor(input), result);
  });
});
