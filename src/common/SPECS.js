import indexById from './indexById';

import ROLES from './ROLES';
import PRIMARY_STATS from './PRIMARY_STATS';

const SPECS = {
  ARCANE_MAGE: {
    id: 62,
    className: 'Mage',
    specName: 'Arcane',
    role: ROLES.DPS.RANGED,
    primaryStat: PRIMARY_STATS.INTELLECT,
    masterySpellId: 190740,
    masteryCoefficient: 1.2, // might be 0.6, Wowhead is unclear
    ranking: {
      class: 4,
      spec: 1,
    },
  },
  FIRE_MAGE: {
    id: 63,
    className: 'Mage',
    specName: 'Fire',
    role: ROLES.DPS.RANGED,
    primaryStat: PRIMARY_STATS.INTELLECT,
    masterySpellId: 12846,
    masteryCoefficient: 0.75,
    ranking: {
      class: 4,
      spec: 2,
    },
  },
  FROST_MAGE: {
    id: 64,
    className: 'Mage',
    specName: 'Frost',
    role: ROLES.DPS.RANGED,
    primaryStat: PRIMARY_STATS.INTELLECT,
    masterySpellId: 76613,
    masteryCoefficient: 2.25,
    ranking: {
      class: 4,
      spec: 3,
    },
  },
  HOLY_PALADIN: {
    id: 65,
    className: 'Paladin',
    specName: 'Holy',
    role: ROLES.HEALER,
    primaryStat: PRIMARY_STATS.INTELLECT,
    masterySpellId: 183997,
    masteryCoefficient: 1.5, // confirmed
    ranking: {
      class: 6,
      spec: 1,
    },
  },
  PROTECTION_PALADIN: {
    id: 66,
    className: 'Paladin',
    specName: 'Protection',
    role: ROLES.TANK,
    primaryStat: PRIMARY_STATS.STRENGTH,
    masterySpellId: 76671,
    masteryCoefficient: 1,
    ranking: {
      class: 6,
      spec: 2,
    },
  },
  RETRIBUTION_PALADIN: {
    id: 70,
    className: 'Paladin',
    specName: 'Retribution',
    role: ROLES.DPS.MELEE,
    primaryStat: PRIMARY_STATS.STRENGTH,
    masterySpellId: 76672,
    masteryCoefficient: 1.75,
    ranking: {
      class: 6,
      spec: 3,
    },
  },
  ARMS_WARRIOR: {
    id: 71,
    className: 'Warrior',
    specName: 'Arms',
    role: ROLES.DPS.MELEE,
    primaryStat: PRIMARY_STATS.STRENGTH,
    masterySpellId: 76838,
    masteryCoefficient: 1.6,
    ranking: {
      class: 11,
      spec: 1,
    },
  },
  FURY_WARRIOR: {
    id: 72,
    className: 'Warrior',
    specName: 'Fury',
    role: ROLES.DPS.MELEE,
    primaryStat: PRIMARY_STATS.STRENGTH,
    masterySpellId: 76856,
    masteryCoefficient: 1.4,
    ranking: {
      class: 11,
      spec: 2,
    },
  },
  PROTECTION_WARRIOR: {
    id: 73,
    className: 'Warrior',
    specName: 'Protection',
    role: ROLES.TANK,
    primaryStat: PRIMARY_STATS.STRENGTH,
    masterySpellId: 76857,
    masteryCoefficient: 1, // or 1.5 or 0.5, unclear which the character panel uses
    ranking: {
      class: 11,
      spec: 3,
    },
  },
  BALANCE_DRUID: {
    id: 102,
    className: 'Druid',
    specName: 'Balance',
    role: ROLES.DPS.RANGED,
    primaryStat: PRIMARY_STATS.INTELLECT,
    masterySpellId: 77492,
    masteryCoefficient: 2.25,
    ranking: {
      class: 2,
      spec: 1,
    },
  },
  FERAL_DRUID: {
    id: 103,
    className: 'Druid',
    specName: 'Feral',
    role: ROLES.DPS.MELEE,
    primaryStat: PRIMARY_STATS.AGILITY,
    masterySpellId: 77493,
    masteryCoefficient: 2,
    ranking: {
      class: 2,
      spec: 2,
    },
  },
  GUARDIAN_DRUID: {
    id: 104,
    className: 'Druid',
    specName: 'Guardian',
    role: ROLES.TANK,
    primaryStat: PRIMARY_STATS.AGILITY,
    masterySpellId: 155783,
    masteryCoefficient: 0.5,
    ranking: {
      class: 2,
      spec: 3,
    },
  },
  RESTORATION_DRUID: {
    id: 105,
    className: 'Druid',
    specName: 'Restoration',
    role: ROLES.HEALER,
    primaryStat: PRIMARY_STATS.INTELLECT,
    masterySpellId: 77495,
    masteryCoefficient: 0.6,
    ranking: {
      class: 2,
      spec: 4,
    },
  },
  BLOOD_DEATH_KNIGHT: {
    id: 250,
    className: 'Death Knight',
    specName: 'Blood',
    role: ROLES.TANK,
    primaryStat: PRIMARY_STATS.STRENGTH,
    masterySpellId: 77513,
    masteryCoefficient: 1.5, // confirmed
    ranking: {
      class: 1,
      spec: 1,
    },
  },
  FROST_DEATH_KNIGHT: {
    id: 251,
    className: 'Death Knight',
    specName: 'Frost',
    role: ROLES.DPS.MELEE,
    primaryStat: PRIMARY_STATS.STRENGTH,
    masterySpellId: 77514,
    masteryCoefficient: 1.5,
    ranking: {
      class: 1,
      spec: 2,
    },
  },
  UNHOLY_DEATH_KNIGHT: {
    id: 252,
    className: 'Death Knight',
    specName: 'Unholy',
    role: ROLES.DPS.MELEE,
    primaryStat: PRIMARY_STATS.STRENGTH,
    masterySpellId: 77515,
    masteryCoefficient: 2.25,
    ranking: {
      class: 1,
      spec: 3,
    },
  },
  BEAST_MASTERY_HUNTER: {
    id: 253,
    className: 'Hunter',
    specName: 'Beast Mastery',
    role: ROLES.DPS.RANGED,
    primaryStat: PRIMARY_STATS.AGILITY,
    masterySpellId: 76657,
    masteryCoefficient: 2.25,
    ranking: {
      class: 3,
      spec: 1,
    },
  },
  MARKSMANSHIP_HUNTER: {
    id: 254,
    className: 'Hunter',
    specName: 'Marksmanship',
    role: ROLES.DPS.RANGED,
    primaryStat: PRIMARY_STATS.AGILITY,
    masterySpellId: 193468,
    masteryCoefficient: 0.625,
    ranking: {
      class: 3,
      spec: 2,
    },
  },
  SURVIVAL_HUNTER: {
    id: 255,
    className: 'Hunter',
    specName: 'Survival',
    role: ROLES.DPS.MELEE,
    primaryStat: PRIMARY_STATS.AGILITY,
    masterySpellId: 191334,
    masteryCoefficient: 0.5,
    ranking: {
      class: 3,
      spec: 3,
    },
  },
  DISCIPLINE_PRIEST: {
    id: 256,
    className: 'Priest',
    specName: 'Discipline',
    role: ROLES.HEALER,
    primaryStat: PRIMARY_STATS.INTELLECT,
    masterySpellId: 77484,
    masteryCoefficient: 1.6,
    ranking: {
      class: 7,
      spec: 1,
    },
  },
  HOLY_PRIEST: {
    id: 257,
    className: 'Priest',
    specName: 'Holy',
    role: ROLES.HEALER,
    primaryStat: PRIMARY_STATS.INTELLECT,
    masterySpellId: 77485,
    masteryCoefficient: 1.25,
    ranking: {
      class: 7,
      spec: 2,
    },
  },
  SHADOW_PRIEST: {
    id: 258,
    className: 'Priest',
    specName: 'Shadow',
    role: ROLES.DPS.RANGED,
    primaryStat: PRIMARY_STATS.INTELLECT,
    masterySpellId: 77486,
    masteryCoefficient: 2.5,
    ranking: {
      class: 7,
      spec: 3,
    },
  },
  ASSASSINATION_ROGUE: {
    id: 259,
    className: 'Rogue',
    specName: 'Assassination',
    role: ROLES.DPS.MELEE,
    primaryStat: PRIMARY_STATS.AGILITY,
    masterySpellId: 76803,
    masteryCoefficient: 4, // might be 3.5 or 2, Wowhead is unclear
    ranking: {
      class: 8,
      spec: 1,
    },
  },
  OUTLAW_ROGUE: {
    id: 260,
    className: 'Rogue',
    specName: 'Outlaw',
    role: ROLES.DPS.MELEE,
    primaryStat: PRIMARY_STATS.AGILITY,
    masterySpellId: 76806,
    masteryCoefficient: 2.2,
    ranking: {
      class: 8,
      spec: 4,
    },
  },
  SUBTLETY_ROGUE: {
    id: 261,
    className: 'Rogue',
    specName: 'Subtlety',
    role: ROLES.DPS.MELEE,
    primaryStat: PRIMARY_STATS.AGILITY,
    masterySpellId: 76808,
    masteryCoefficient: 2.76,
    ranking: {
      class: 8,
      spec: 3,
    },
  },
  ELEMENTAL_SHAMAN: {
    id: 262,
    className: 'Shaman',
    specName: 'Elemental',
    role: ROLES.DPS.RANGED,
    primaryStat: PRIMARY_STATS.INTELLECT,
    masterySpellId: 168534,
    masteryCoefficient: 1.875, // confirmed
    ranking: {
      class: 9,
      spec: 1,
    },
  },
  ENHANCEMENT_SHAMAN: {
    id: 263,
    className: 'Shaman',
    specName: 'Enhancement',
    role: ROLES.DPS.MELEE,
    primaryStat: PRIMARY_STATS.AGILITY,
    masterySpellId: 77223,
    masteryCoefficient: 2,
    ranking: {
      class: 9,
      spec: 2,
    },
  },
  RESTORATION_SHAMAN: {
    id: 264,
    className: 'Shaman',
    specName: 'Restoration',
    role: ROLES.HEALER,
    primaryStat: PRIMARY_STATS.INTELLECT,
    masterySpellId: 77226,
    masteryCoefficient: 3, // confirmed
    ranking: {
      class: 9,
      spec: 3,
    },
  },
  AFFLICTION_WARLOCK: {
    id: 265,
    className: 'Warlock',
    specName: 'Affliction',
    role: ROLES.DPS.RANGED,
    primaryStat: PRIMARY_STATS.INTELLECT,
    masterySpellId: 77215,
    masteryCoefficient: 3.125,
    ranking: {
      class: 10,
      spec: 1,
    },
  },
  DEMONOLOGY_WARLOCK: {
    id: 266,
    className: 'Warlock',
    specName: 'Demonology',
    role: ROLES.DPS.RANGED,
    primaryStat: PRIMARY_STATS.INTELLECT,
    masterySpellId: 77219,
    masteryCoefficient: 1.8,
    ranking: {
      class: 10,
      spec: 2,
    },
  },
  DESTRUCTION_WARLOCK: {
    id: 267,
    className: 'Warlock',
    specName: 'Destruction',
    role: ROLES.DPS.RANGED,
    primaryStat: PRIMARY_STATS.INTELLECT,
    masterySpellId: 77220,
    masteryCoefficient: 2,
    ranking: {
      class: 10,
      spec: 3,
    },
  },
  BREWMASTER_MONK: {
    id: 268,
    className: 'Monk',
    specName: 'Brewmaster',
    role: ROLES.TANK,
    primaryStat: PRIMARY_STATS.AGILITY,
    masterySpellId: 117906,
    masteryCoefficient: 1,
    ranking: {
      class: 5,
      spec: 1,
    },
  },
  WINDWALKER_MONK: {
    id: 269,
    className: 'Monk',
    specName: 'Windwalker',
    role: ROLES.DPS.MELEE,
    primaryStat: PRIMARY_STATS.AGILITY,
    masterySpellId: 115636,
    masteryCoefficient: 1.25,
    ranking: {
      class: 5,
      spec: 3,
    },
  },
  MISTWEAVER_MONK: {
    id: 270,
    className: 'Monk',
    specName: 'Mistweaver',
    role: ROLES.HEALER,
    primaryStat: PRIMARY_STATS.INTELLECT,
    masterySpellId: 117907,
    masteryCoefficient: 13,
    ranking: {
      class: 5,
      spec: 2,
    },
  },
  HAVOC_DEMON_HUNTER: {
    id: 577,
    className: 'Demon Hunter',
    specName: 'Havoc',
    role: ROLES.DPS.MELEE,
    primaryStat: PRIMARY_STATS.AGILITY,
    masterySpellId: 185164,
    masteryCoefficient: 1.5, // or 1
    ranking: {
      class: 12,
      spec: 1,
    },
  },
  VENGEANCE_DEMON_HUNTER: {
    id: 581,
    className: 'Demon Hunter',
    specName: 'Vengeance',
    role: ROLES.TANK,
    primaryStat: PRIMARY_STATS.AGILITY,
    masterySpellId: 203747,
    masteryCoefficient: 0.75, // or 1 or 2.25
    ranking: {
      class: 12,
      spec: 2,
    },
  },
};

export default indexById(SPECS);
