import { cartesianProduct } from "../utils/combinations.ts";
import { armors, doesPlayerWinBattle, rings, Stats, weapons } from "./stats.ts";

function solve(): number {
  let highestCost = 0;

  for (const combination of cartesianProduct(weapons, armors, rings, rings)) {
    const [weapon, armor, ring1, ring2] = combination;
    if (ring1.id === ring2.id) continue;

    const setCost = weapon.cost + armor.cost + ring1.cost + ring2.cost;

    const player: Stats = {
      hp: 100,
      damage: weapon.damage + ring1.damage + ring2.damage,
      armor: armor.armor + ring1.armor + ring2.armor,
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
