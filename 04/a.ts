import * as mod from "https://deno.land/std@0.119.0/hash/md5.ts";

const input = "yzbqklnj";

function solve(input: string): number {
  let i = 0;
  while (true) {
    const key = input + i;
    const hash = new mod.Md5().update(key).toString();

    if (hash.startsWith("00000")) {
      return i;
    }
    i++;
  }
}

console.info(solve(input));
