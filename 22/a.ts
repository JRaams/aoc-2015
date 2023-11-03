function solve(hp: number, mana: number, bossHP: number, bossDMG: number, shield: number, poison: number, recharge: number, isPlayersTurn: boolean, depth: number): number {
  if (bossHP <= 0) {
    return 0;
  }

  if (depth === 0 || hp <= 0) {
    return Number.MAX_SAFE_INTEGER;
  }

  const nextShield = Math.max(0, shield - 1);
  const nextPoison = Math.max(0, poison - 1);
  const nextRecharge = Math.max(0, recharge - 1);

  // Players turn
  if (isPlayersTurn) {
    if (poison > 0) bossHP -= 3;
    if (bossHP <= 0) return 0;

    if (recharge > 0) mana += 101;

    if (mana < 53) return Number.MAX_SAFE_INTEGER;

    let minimum = Number.MAX_SAFE_INTEGER;
    if (mana >= 53) minimum = Math.min(minimum, 53 + solve(hp, mana - 53, bossHP - 4, bossDMG, nextShield, nextPoison, nextRecharge, !isPlayersTurn, depth - 1));
    if (mana >= 73) minimum = Math.min(minimum, 73 + solve(hp + 2, mana - 73, bossHP - 2, bossDMG, nextShield, nextPoison, nextRecharge, !isPlayersTurn, depth - 1));
    if (mana >= 113 && nextShield === 0) minimum = Math.min(minimum, 113 + solve(hp, mana - 113, bossHP, bossDMG, 6, nextPoison, nextRecharge, !isPlayersTurn, depth - 1));
    if (mana >= 173 && nextPoison === 0) minimum = Math.min(minimum, 173 + solve(hp, mana - 173, bossHP, bossDMG, nextShield, 6, nextRecharge, !isPlayersTurn, depth - 1));
    if (mana >= 229 && nextRecharge === 0) minimum = Math.min(minimum, 229 + solve(hp, mana - 229, bossHP, bossDMG, nextShield, nextPoison, 5, !isPlayersTurn, depth - 1));
    return minimum;
  }

  // Boss' turn
  if (poison > 0) bossHP -= 3;

  if (recharge > 0) mana += 101;

  if (bossHP <= 0) {
    return 0;
  } else {
    const armor = shield === 0 ? 0 : 7;
    hp -= Math.max(1, bossDMG - armor);
  }

  return solve(hp, mana, bossHP, bossDMG, nextShield, nextPoison, nextRecharge, !isPlayersTurn, depth - 1);
}

const bossHp = 58;
const bossDamage = 9;
console.info(solve(50, 500, bossHp, bossDamage, 0, 0, 0, true, 25));
