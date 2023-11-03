const LOG = false;

export type Player = {
  hp: number;
  armor: number;
  mana: number;
};

export type Boss = {
  hp: number;
  damage: number;
};

export abstract class Spell {
  name: string;
  manaCost: number;
  turnsLeft: number;

  constructor(name: string, manaCost: number, turnsLeft: number) {
    this.name = name;
    this.manaCost = manaCost;
    this.turnsLeft = turnsLeft;
  }

  abstract init(player: Player, boss: Boss): void;
  abstract apply(player: Player, boss: Boss): void;
  abstract destroy(player: Player, boss: Boss): void;
}

export class MagicMissileSpell extends Spell {
  constructor() {
    super("Magic Missile", 53, 0);
  }

  init(_player: Player, boss: Boss): void {
    LOG && console.info("Player casts Magic Missile");
    boss.hp -= 4;
  }

  apply(_player: Player, _boss: Boss): void {}

  destroy(_player: Player, _boss: Boss): void {}
}

export class DrainSpell extends Spell {
  constructor() {
    super("Drain", 73, 0);
  }

  init(player: Player, boss: Boss): void {
    LOG && console.info("Player casts Drain");
    boss.hp -= 2;
    player.hp += 2;
  }

  apply(_player: Player, _boss: Boss): void {}

  destroy(_player: Player, _boss: Boss): void {}
}

export class ShieldSpell extends Spell {
  constructor() {
    super("Shield", 113, 6);
  }

  init(player: Player, _boss: Boss): void {
    LOG && console.info("Player casts Shield Spell");
    player.armor += 7;
  }

  apply(_player: Player, _boss: Boss): void {}

  destroy(player: Player, _boss: Boss): void {
    player.armor -= 7;
  }
}

export class PoisonSpell extends Spell {
  constructor() {
    super("Poison", 173, 6);
  }

  init(_player: Player, _boss: Boss): void {
    LOG && console.info("Player casts Poison");
  }

  apply(_player: Player, boss: Boss): void {
    LOG &&
      console.info(`Poison deals 3 damage; its timer is now ${this.turnsLeft}`);
    boss.hp -= 3;
  }

  destroy(_player: Player, _boss: Boss): void {}
}

export class RechargeSpell extends Spell {
  constructor() {
    super("Recharge", 229, 5);
  }

  init(_player: Player, _boss: Boss): void {
    LOG && console.info("Player casts Recharge");
  }

  apply(player: Player, _boss: Boss): void {
    LOG && console.info(
      `Recharge provides 101 mana; its timer is now ${this.turnsLeft}`,
    );
    player.mana += 101;
  }

  destroy(_player: Player, _boss: Boss): void {}
}

export const spellTypes = [
  "MagicMissile",
  "Drain",
  "Shield",
  "Poison",
  "Recharge",
] as const;

export type SpellType = typeof spellTypes[number];

export function spellFactory(spell: SpellType): Spell {
  switch (spell) {
    case "MagicMissile":
      return new MagicMissileSpell();
    case "Drain":
      return new DrainSpell();
    case "Poison":
      return new PoisonSpell();
    case "Recharge":
      return new RechargeSpell();
    case "Shield":
      return new ShieldSpell();
  }
}
