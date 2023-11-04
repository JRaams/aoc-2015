import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";
import { findCode, getNumber } from "./a.ts";

Deno.test("getNumber 1,1 -> 1", () => {
  assertEquals(getNumber(1, 1), 1);
});
Deno.test("getNumber 2,1 -> 3", () => {
  assertEquals(getNumber(2, 1), 3);
});
Deno.test("getNumber 3,1 -> 6", () => {
  assertEquals(getNumber(3, 1), 6);
});
Deno.test("getNumber 4,1 -> 10", () => {
  assertEquals(getNumber(4, 1), 10);
});
Deno.test("getNumber 5,1 -> 15", () => {
  assertEquals(getNumber(5, 1), 15);
});
Deno.test("getNumber 6,1 -> 21", () => {
  assertEquals(getNumber(6, 1), 21);
});

Deno.test("getNumber 1,2 -> 2", () => {
  assertEquals(getNumber(1, 2), 2);
});
Deno.test("getNumber 2,2 -> 5", () => {
  assertEquals(getNumber(2, 2), 5);
});
Deno.test("getNumber 3,2 -> 9", () => {
  assertEquals(getNumber(3, 2), 9);
});
Deno.test("getNumber 4,2 -> 14", () => {
  assertEquals(getNumber(4, 2), 14);
});
Deno.test("getNumber 5,2 -> 20", () => {
  assertEquals(getNumber(5, 2), 20);
});

Deno.test("getNumber 1,3 -> 4", () => {
  assertEquals(getNumber(1, 3), 4);
});
Deno.test("getNumber 2,3 -> 8", () => {
  assertEquals(getNumber(2, 3), 8);
});
Deno.test("getNumber 3,3 -> 13", () => {
  assertEquals(getNumber(3, 3), 13);
});
Deno.test("getNumber 4,3 -> 19", () => {
  assertEquals(getNumber(4, 3), 19);
});

Deno.test("getNumber 1,4 -> 7", () => {
  assertEquals(getNumber(1, 4), 7);
});
Deno.test("getNumber 2,4 -> 12", () => {
  assertEquals(getNumber(2, 4), 12);
});
Deno.test("getNumber 3,4 -> 18", () => {
  assertEquals(getNumber(3, 4), 18);
});

Deno.test("getNumber 1,5 -> 11", () => {
  assertEquals(getNumber(1, 5), 11);
});
Deno.test("getNumber 2,5 -> 17", () => {
  assertEquals(getNumber(2, 5), 17);
});

Deno.test("getNumber 1,6 -> 16", () => {
  assertEquals(getNumber(1, 6), 16);
});

Deno.test("findCode 1 -> 20151125", () => {
  assertEquals(findCode(1), 20151125);
});
Deno.test("findCode 3 -> 18749137", () => {
  assertEquals(findCode(3), 18749137);
});
Deno.test("findCode 6 -> 17289845", () => {
  assertEquals(findCode(6), 17289845);
});
Deno.test("findCode 10 -> 30943339", () => {
  assertEquals(findCode(10), 30943339);
});
Deno.test("findCode 15 -> 10071777", () => {
  assertEquals(findCode(15), 10071777);
});
Deno.test("findCode 21 -> 33511524", () => {
  assertEquals(findCode(21), 33511524);
});
