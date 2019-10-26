export type Room = BattleRoom | TrapRoom | FacilityRoom | PrisonRoom | ShrineRoom | DisableRoom

export type RoomType = "Battle" | "Trap" | "Facility" | "Prison" | "Shrine" | "Disable"

export type DisableRoom = {
  type: "Disable"
  name: ""
}

export type BattleRoom = {
  type: "Battle"
  name: typeof battleRoomNames[number]
}

const battleRoomNames = [
  "empty",
  "arena",
  "barrier",
  "battle",
  "ambush",
  "blood_altar",
  "darkness",
  "excess",
  "frenzy",
  "iron_maiden",
  "meditation",
  "panic",
  "rage",
  "sloth",
  "solitude",
  "sprout",
  "sword_and_shield",
  "amplify",
  "gigantify",
  "graveyard",
  "betrayal",
  "temptation",
  "vampire",
  "sacrifice",
  "bloodlust",
  "double_giant",
  "haste",
  "scream",
  "warhorn",
  "three_gianteers",
  "gunpowder",
  "pressure",
  "dynamite",
  "blood_pool",
  "tree_of_life",
  "healing_wind",
  "bigger_room",
  "bigger_fight",
  "necropolis",
  "mirror_room",
  "prism",
  "shield_of_steel",
  "iron_wall",
  "iron_curtain",
  "steel_thorn",
  "thorn_bush",
  "the_absolute",
  "swirl_of_anger",
  "silent_temple",
  "demonic_barrier",
  "bloody_mist",
  "death_mist",
  "infinity_clock"
] as const

export const battleRooms: Array<BattleRoom> = battleRoomNames.map(name => {
  return { type: "Battle", name }
})

export type TrapRoom = {
  type: "Trap"
  name: typeof trapRoomNames[number]
}

const trapRoomNames = [
  "empty",
  "arrow",
  "ice",
  "pit",
  "rock",
  "distortion",
  "guillotine",
  "hunger",
  "ignition",
  "incineration",
  "return",
  "venom",
  "curse",
  "explosion",
  "extraction",
  "thunder",
  "blitz",
  "exploit",
  "combustion",
  "crossbow",
  "curtain_of_darkness",
  "electric_field",
  "explosive_arrow",
  "icebolt",
  "lightning",
  "multishot",
  "poison_arrow",
  "poison_leak",
  "skewer",
  "slingshot",
  "meteor",
  "arrows",
  "chain_lightning",
  "electrical_short",
  "chaos_arrow",
  "chaos_rain",
  "ice_pit",
  "frost_storm",
  "fire_pillar",
  "fire_storm",
  "meteor_shower",
  "disease",
  "infection",
  "plague",
  "arrow_bomb",
  "big_explosion",
  "curse_wave",
  "big_bang",
  "white_frost",
  "death_wave",
  "lightning_rod",
  "flamethrower",
  "snowman",
  "sting",
  "death_and_corruption",
  "electric_discharge",
  "plague_spreader",
  "frozen_mist",
  "crater",
  "lightning_bolt",
  "broken_mirror",
  "swamp_monster",
  "yggdrasil"
] as const

export const trapRooms: Array<TrapRoom> = trapRoomNames.map(name => {
  return { type: "Trap", name }
})

export type FacilityRoom = {
  type: "Facility"
  name: typeof facilityRoomNames[number]
}

const facilityRoomNames = [
  "empty",
  "hatchery",
  "lounge",
  "magic_gear",
  "operation_room",
  "laboratory",
  "meat_wagon",
  "tailwind",
  "frosty_wind",
  "revenge",
  "blood_shield",
  "blossoming_flame",
  "poison_weed",
  "thornder_weed",
  "special_ops_room",
  "blacksmith",
  "foundry",
  "secret_laboratory",
  "library",
  "ancient_bell",
  "the_seal",
  "iron_skin",
  "rainbow_flower",
  "sapling_of_yggdrasil"
] as const

export const facilityRooms: Array<FacilityRoom> = facilityRoomNames.map(name => {
  return { type: "Facility", name }
})

export type PrisonRoom = {
  type: "Prison"
  name: typeof prisonRoomNames[number]
}

const prisonRoomNames = [
  "empty",
  "altar_level_1",
  "altar_level_2",
  "altar_level_3",
  "altar_level_4",
  "old_prison",
  "prison",
  "iron_prison",
  "magic_prison",
  "workhouse",
  "prison_factory",
  "power_station",
  "prisoner_and_guard",
  "prisoner_lab",
  "giant_laboratory",
  "howling_prison",
  "execution_ground",
  "bloodcry"
] as const

export const prisonRooms: Array<PrisonRoom> = prisonRoomNames.map(name => {
  return { type: "Prison", name }
})

export type ShrineRoom = {
  type: "Shrine"
  name: typeof shrineRoomNames[number]
}

const shrineRoomNames = [
  "empty",
  "corruption",
  "heal",
  "strengthen",
  "protection",
  "luck",
  "cleanse",
  "blessing"
] as const

export const shrineRooms: Array<ShrineRoom> = shrineRoomNames.map(name => {
  return { type: "Shrine", name }
})

export const roomToUrl = (room: Room): string => {
  switch (room.type) {
    case "Battle":
      return `/rooms/battles/${room.name}.png`
      break
    case "Trap":
      return `/rooms/traps/${room.name}.png`
      break
    case "Facility":
      return `/rooms/facilities/${room.name}.png`
      break
    case "Prison":
      return `/rooms/prisons/${room.name}.png`
      break
    case "Shrine":
      return `/rooms/shrines/${room.name}.png`
      break
    default:
      return ""
  }
}
