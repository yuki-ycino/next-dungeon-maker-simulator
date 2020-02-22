import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

import { RootState } from "../reducers"
import { getMapType, MapName, MapType } from "../consts/map"
import { Room } from "../consts/room"
import { threeFour } from "../consts/three-four"

type State = {
  mapType: MapType
  map: Array<Array<Room>>
}

const initialState: State = {
  mapType: threeFour,
  map: [...Array(3)].map(() => {
    return [...Array(4)].map(() => {
      return {
        type: "Battle",
        name: "empty"
      }
    })
  })
}

export const mapModule = createSlice({
  name: "map",
  initialState: initialState,
  reducers: {
    setMapType: (state, { payload }: PayloadAction<{ mapName: MapName }>) => {
      const mapType = getMapType(payload.mapName)
      state.mapType = mapType
      state.map = mapType.rooms.map(row => {
        return row.map(col => {
          if (col.enable) {
            return {
              type: col.shrine ? "Shrine" : "Battle",
              name: "empty"
            }
          } else {
            return {
              type: "Disable",
              name: ""
            }
          }
        })
      })
    },
    setRoom: (state, { payload }: PayloadAction<{ x: number; y: number; room: Room }>) => {
      const { x, y, room } = payload
      state.map[y - 1][x - 1] = room
    }
  }
})

export const useMap = () => {
  return useSelector((state: RootState) => state.map.map)
}

export const useMapType = () => {
  return useSelector((state: RootState) => state.map.mapType)
}
