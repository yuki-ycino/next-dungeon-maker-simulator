import React from "react"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import { Modal, Nav, Button } from "react-bootstrap"

import { Room, RoomType, roomToUrl } from "../../../consts/room"
import { mapModule } from "../../../modules/map"
import { roomModalModule, useRoomModal } from "../../../modules/room-modal"

export const RoomModal: React.FC = () => {
  const roomModal = useRoomModal()
  const mapActions = mapModule.actions
  const modalActions = roomModalModule.actions

  const dispatch = useDispatch()
  const { t } = useTranslation()

  const setRoomType = (roomType: RoomType) => {
    dispatch(modalActions.setRoomType({ roomType: roomType }))
  }

  const setRoom = (room: Room) => {
    if (roomModal.enable) {
      dispatch(mapActions.setRoom({ room: room, x: roomModal.x, y: roomModal.y }))
      dispatch(modalActions.hideRoomModal())
    }
  }

  return (
    <>
      <Modal show={roomModal.enable} onHide={() => dispatch(modalActions.hideRoomModal())}>
        <Modal.Body>
          <Nav variant="tabs" activeKey={roomModal.enable ? roomModal.type : "Battle"}>
            <Nav.Item>
              <Nav.Link eventKey="Battle" onSelect={() => setRoomType("Battle")}>
                {t("Battle")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Trap" onSelect={() => setRoomType("Trap")}>
                {t("Trap")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Facility" onSelect={() => setRoomType("Facility")}>
                {t("Facility")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Prison" onSelect={() => setRoomType("Prison")}>
                {t("Prison")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Shrine" onSelect={() => setRoomType("Shrine")}>
                {t("Shrine")}
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {roomModal.enable &&
            roomModal.rooms.map(room => {
              return <RoomButton key={room.name} url={roomToUrl(room)} onClick={() => setRoom(room)} />
            })}
          <Modal.Footer>
            <Button variant="secondary" block onClick={() => dispatch(modalActions.hideRoomModal())}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  )
}

const RoomButton: React.FC<{ url: string; onClick: () => void }> = ({ url, onClick }) => {
  const StyledButton = styled(Button)`
    margin: 4px;
    padding: 4px;
    line-height: 0;
    border: 0;
    &:hover,
    &:active,
    &:focus,
    &:not(:disabled):not(.disabled):active {
      background-color: #fff;
      box-shadow: none !important;
    }
  `

  const Image = styled.img`
    height: 48px;
    width: 48px;
  `

  return (
    <StyledButton variant="outline-primary" onClick={onClick}>
      <Image src={url} />
    </StyledButton>
  )
}
