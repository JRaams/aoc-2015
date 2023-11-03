import { permute } from "../utils/permute.ts";
import { Battle } from "./battle.ts";
import {
  Boss,
  DrainSpell,
  MagicMissileSpell,
  Player,
  PoisonSpell,
  RechargeSpell,
  ShieldSpell,
  Spell,
  spellFactory,
  SpellType,
  spellTypes,
} from "./spell.ts";

function solve(): number {
  // const player: Player = {
  //   hp: 10,
  //   armor: 0,
  //   mana: 250,
  // };
  // const boss: Boss = {
  //   hp: 13,
  //   damage: 8,
  // };
  // const battle = new Battle(player, boss, [
  //   new PoisonSpell(),
  //   new MagicMissileSpell(),
  // ]);
  // const a = battle.doesPlayerWinBattle();

  // const a = doesPlayerWinBattle(player, boss, [
  //   new PoisonSpell(),
  //   new MagicMissileSpell(),
  // ]);

  // const player: Player = {
  //   hp: 10,
  //   armor: 0,
  //   mana: 250,
  // };
  // const boss: Boss = {
  //   hp: 14,
  //   damage: 8,
  // };

  // const battle = new Battle(player, boss, [
  //   new RechargeSpell(),
  //   new ShieldSpell(),
  //   new DrainSpell(),
  //   new PoisonSpell(),
  //   new MagicMissileSpell(),
  // ]);
  // const b = battle.doesPlayerWinBattle();

  // TODO
  //   //  You cannot cast a spell that would start an effect which is already active.
  // // However, effects can be started on the same turn they end.
  // if (activeSpells.find(x => x.name === nextSpell.name)?.turnsLeft) {
  //   return false;
  // }

  for (let i = 10; i < 12; i++) {
    const spellsToUse = new Array<SpellType>(i);
    for (let j = 0; j < i; j++) {
      spellsToUse[j] = spellTypes[j % spellTypes.length];
    }

    for (const permutation of permute(spellsToUse)) {
      const spells = permutation.map((x) => spellFactory(x));

      // const player: Player = {
      //   hp: 10,
      //   armor: 0,
      //   mana: 250,
      // };
      // const boss: Boss = {
      //   hp: 13,
      //   damage: 8,
      // };
      const player: Player = {
        hp: 50,
        armor: 0,
        mana: 500,
      };
      const boss: Boss = {
        hp: 58,
        damage: 9,
      };
      const battle = new Battle(player, boss, spells);
      if (battle.doesPlayerWinBattle()) {
        console.info(
          "Player won in battle!",
          permutation,
          battle.player,
          battle.boss,
        );
      }
    }
  }

  return 1;
}

console.info(solve());
