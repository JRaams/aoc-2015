import { cartesianProduct } from "../utils/combinations.ts";
import { armors, doesPlayerWinBattle, rings, Stats, weapons } from "./stats.ts";

function solve(): number {
  let lowestCost = Number.MAX_SAFE_INTEGER;

  for (const combination of cartesianProduct(weapons, armors, rings, rings)) {
    const [weapon, armor, ring1, ring2] = combination;
    if (ring1.id === ring2.id) continue;

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

    const playerWins = doesPlayerWinBattle(player, boss);
    if (playerWins) {
      const setCost = weapon.cost + armor.cost + ring1.cost + ring2.cost;
      lowestCost = Math.min(lowestCost, setCost);
    }
  }

  return lowestCost;
}

console.info(solve());
