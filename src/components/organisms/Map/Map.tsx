import React from "react"
import { useDispatch } from "react-redux"

import { Room as RoomType } from "../../../consts/room"
import { useMap, useMapType } from "../../../modules/map"
import { roomModalModule } from "../../../modules/room-modal"
import { Room, DisableRoom } from "../../molecules/Room"
import { RoomModal } from "../RoomModal"

export const Map: React.FC = () => {
  const map = useMap()
  const mapType = useMapType()
  const actions = roomModalModule.actions

  const dispatch = useDispatch()

  const onClickRoom = (x: number, y: number) => (room: RoomType) => {
    dispatch(actions.showRoomModal({ x: x, y: y, defaultRoom: room, roomType: room.type }))
  }

  return (
    <>
      <RoomModal />
      <table>
        <tbody>
          {mapType.rooms.map((row, i) => {
            const indexY = i + 1
            return (
              <tr key={indexY}>
                {row.map((col, j) => {
                  const indexX = j + 1

                  if (col.enable) {
                    return (
                      <td key={indexX} style={{ padding: 0 }}>
                        <Room room={map[i][j]} routes={col.routes} onClick={onClickRoom(indexX, indexY)} />
                      </td>
                    )
                  } else {
                    return (
                      <td key={indexX} style={{ padding: 0 }}>
                        <DisableRoom />
                      </td>
                    )
                  }
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
