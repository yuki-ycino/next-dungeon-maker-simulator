import { threeThree } from "./three-three"
import { threeFour } from "./three-four"
import { threeFive } from "./three-five"
import { threeSix } from "./three-six"
import { fourFour } from "./four-four"
import { fourFive } from "./four-five"
import { fourSix } from "./four-six"
import { fiveFour } from "./five-four"
import { fiveFive } from "./five-five"
import { fiveSix } from "./five-six"
import { spiderweb } from "./spiderweb"
import { jormungand } from "./jormungand"
import { vortex } from "./vortex"
import { antHell } from "./ant-hell"
import { boxInTheBox } from "./box-in-the-box"
import { pause } from "./pause"
import { maze } from "./maze"
import { exhibition } from "./exhibition"
import { intoTheAbyss } from "./into-the-abyss"

export type MapName =
  | "3x3"
  | "3x4"
  | "3x5"
  | "3x6"
  | "4x4"
  | "4x5"
  | "4x6"
  | "5x4"
  | "5x5"
  | "5x6"
  | "Spiderweb"
  | "Jormungand"
  | "Vortex"
  | "Ant Hell"
  | "Box in the box"
  | "Pause"
  | "Maze"
  | "Exhibition"
  | "Into the Abyss"

export type MapType = {
  mapType: MapName
  height: number
  width: number
  rooms: Array<Array<Room>>
}

type Room = EnableRoom | DisableRoom

type EnableRoom = {
  enable: true
  routes: {
    top: boolean
    bottom: boolean
    left: boolean
    right: boolean
  }
  shrine?: boolean
}

type DisableRoom = {
  enable: false
}

export function getMapType(mapName: MapName): MapType {
  const mapTypes: { [key in MapName]: MapType } = {
    "3x3": threeThree,
    "3x4": threeFour,
    "3x5": threeFive,
    "3x6": threeSix,
    "4x4": fourFour,
    "4x5": fourFive,
    "4x6": fourSix,
    "5x4": fiveFour,
    "5x5": fiveFive,
    "5x6": fiveSix,
    Spiderweb: spiderweb,
    Jormungand: jormungand,
    Vortex: vortex,
    "Ant Hell": antHell,
    "Box in the box": boxInTheBox,
    Pause: pause,
    Maze: maze,
    Exhibition: exhibition,
    "Into the Abyss": intoTheAbyss
  }

  return mapTypes[mapName]
}
