import { Boss, Player, Spell } from "./spell.ts";

const LOG = false;

export class Battle {
  player: Player;
  boss: Boss;
  spells: Spell[];
  private activeSpells: Spell[];

  constructor(player: Player, boss: Boss, spells: Spell[]) {
    this.player = player;
    this.boss = boss;
    this.spells = spells;
    this.activeSpells = [];
  }

  /**
   * @returns boolean whether or not the boss died
   */
  private applySpells(): boolean {
    for (let i = this.activeSpells.length - 1; i >= 0; i--) {
      this.activeSpells[i].turnsLeft--;
      this.activeSpells[i].apply(this.player, this.boss);
      if (this.boss.hp <= 0) {
        LOG && console.info("this kills the boss, and the player wins");
        return true;
      }

      if (this.activeSpells[i].turnsLeft <= 0) {
        this.activeSpells[i].destroy(this.player, this.boss);
        this.activeSpells.splice(i, 1);
      }
    }

    return false;
  }

  /**
   * @returns boolean whether or not the player ran out of mana
   */
  private loadNextSpell(): boolean {
    const nextSpell = this.spells.shift();
    if (nextSpell) {
      nextSpell.init(this.player, this.boss);
      this.player.mana -= nextSpell.manaCost;
      if (this.player.mana <= 0) return false;

      this.activeSpells.push(nextSpell);
    }

    return true;
  }

  /**
   * @returns boolean whether or not the played died
   */
  private bossTurn(): boolean {
    const bossDamage = Math.max(this.boss.damage - this.player.armor, 1);
    LOG && console.info("Boss attacks for ", bossDamage, "damage");
    this.player.hp -= bossDamage;
    if (this.player.hp <= 0) {
      LOG && console.info("this kills the player, and the player wins");
      return true;
    }

    return false;
  }

  doesPlayerWinBattle(): boolean {
    while (true) {
      // Players turn
      LOG && console.info("\n-- Player turn");
      LOG && console.info(this.player);
      LOG && console.info(this.boss);
      let bossDied = this.applySpells();
      if (bossDied) return true;

      const playerHasManaLeft = this.loadNextSpell();
      if (!playerHasManaLeft) return false;

      // Boss' turn
      LOG && console.info("\n-- Boss turn");
      LOG && console.info(this.player);
      LOG && console.info(this.boss);
      bossDied = this.applySpells();
      if (bossDied) return true;

      const playedDied = this.bossTurn();
      if (playedDied) return false;
    }
  }
}
