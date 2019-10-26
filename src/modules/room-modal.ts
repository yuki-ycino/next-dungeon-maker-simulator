import { createSlice, PayloadAction } from "redux-starter-kit"
import { useSelector } from "react-redux"

import { RootState } from "../reducers"
import { battleRooms, trapRooms, facilityRooms, prisonRooms, shrineRooms, Room, RoomType } from "../consts/room"

type State = {
  modal: RoomModal
}

type RoomModal =
  | {
      enable: true
      x: number
      y: number
      room: Room
      type: RoomType
      rooms: Array<Room>
    }
  | {
      enable: false
    }

const initialState: State = {
  modal: { enable: false }
}

export const roomModalModule = createSlice({
  name: "room_modal",
  initialState: initialState,
  reducers: {
    showRoomModal: (
      state,
      { payload }: PayloadAction<{ x: number; y: number; defaultRoom: Room; roomType: RoomType }>
    ) => {
      state.modal = {
        enable: true,
        x: payload.x,
        y: payload.y,
        room: payload.defaultRoom,
        type: payload.roomType,
        rooms: getRoomsFromRoomType(payload.roomType)
      }
    },
    hideRoomModal: state => {
      state.modal = { enable: false }
    },
    setRoomType: (state, { payload }: PayloadAction<{ roomType: RoomType }>) => {
      if (state.modal.enable) {
        state.modal.type = payload.roomType
        state.modal.rooms = getRoomsFromRoomType(payload.roomType)
      }
    }
  }
})

const getRoomsFromRoomType = (type: RoomType) => {
  switch (type) {
    case "Battle":
      return battleRooms
      break
    case "Trap":
      return trapRooms
      break
    case "Facility":
      return facilityRooms
      break
    case "Prison":
      return prisonRooms
      break
    case "Shrine":
      return shrineRooms
      break
    default:
      return []
  }
}

export const useRoomModal = () => {
  return useSelector((state: RootState) => state.roomModal.modal)
}
