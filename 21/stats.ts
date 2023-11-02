export type Item = {
  id: number;
  cost: number;
  damage: number;
  armor: number;
};

type ItemOrNull = Item | null;

export type Stats = {
  hp: number;
  damage: number;
  armor: number;
};

export const weapons: Item[] = [
  { id: 0, cost: 8, damage: 4, armor: 0 },
  { id: 1, cost: 10, damage: 5, armor: 0 },
  { id: 2, cost: 25, damage: 6, armor: 0 },
  { id: 3, cost: 40, damage: 7, armor: 0 },
  { id: 4, cost: 74, damage: 8, armor: 0 },
];

export const armors: ItemOrNull[] = [
  { id: 5, cost: 13, damage: 0, armor: 1 },
  { id: 6, cost: 31, damage: 0, armor: 2 },
  { id: 7, cost: 53, damage: 0, armor: 3 },
  { id: 8, cost: 75, damage: 0, armor: 4 },
  { id: 9, cost: 102, damage: 0, armor: 5 },
  null,
];

export const rings: ItemOrNull[] = [
  { id: 10, cost: 25, damage: 1, armor: 0 },
  { id: 11, cost: 50, damage: 2, armor: 0 },
  { id: 12, cost: 100, damage: 3, armor: 0 },
  { id: 13, cost: 20, damage: 0, armor: 1 },
  { id: 14, cost: 40, damage: 0, armor: 2 },
  { id: 15, cost: 80, damage: 0, armor: 3 },
  null,
];

export function doesPlayerWinBattle(player: Stats, boss: Stats): boolean {
  while (true) {
    boss.hp -= Math.max(player.damage - boss.armor, 1);
    if (boss.hp <= 0) return true;

    player.hp -= Math.max(boss.damage - player.armor, 1);
    if (player.hp <= 0) return false;
  }
}
