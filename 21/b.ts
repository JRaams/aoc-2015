import { cartesianProduct } from "../utils/combinations.ts";
import { armors, doesPlayerWinBattle, rings, Stats, weapons } from "./stats.ts";

function solve(): number {
  let highestCost = 0;

  for (const combination of cartesianProduct(weapons, armors, rings, rings)) {
    const [weapon, armor, ring1, ring2] = combination;
    if (!weapon || ring1?.id === ring2?.id) continue;

    const setCost = weapon.cost + (armor?.cost ?? 0) +
      (ring1?.cost ?? 0) + (ring2?.cost ?? 0);

    const player: Stats = {
      hp: 100,
      damage: weapon.damage + (ring1?.damage ?? 0) +
        (ring2?.damage ?? 0),
      armor: (armor?.armor ?? 0) + (ring1?.armor ?? 0) +
        (ring2?.armor ?? 0),
    };

    const boss: Stats = {
      hp: 103,
      damage: 9,
      armor: 2,
    };

    const doesPlayerWin = doesPlayerWinBattle(player, boss);
    if (!doesPlayerWin) {
      highestCost = Math.max(highestCost, setCost);
    }
  }

  return highestCost;
}

console.info(solve());
