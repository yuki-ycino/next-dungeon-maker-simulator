import React from "react"
import styled from "styled-components"
import { Button } from "react-bootstrap"

import { roomToUrl, Room as RoomType } from "../../../consts/room"

type Props = {
  room: RoomType
  routes: {
    top: boolean
    bottom: boolean
    left: boolean
    right: boolean
  }
  onClick: (room: RoomType) => void
}

export const Room: React.FC<Props> = ({ room, routes, onClick }) => {
  return (
    <RoomButton onClick={() => onClick(room)}>
      {routes.top ? <VerticalLine /> : <VerticalSpace />}
      <Flex>
        {routes.left ? <HorizontalLine /> : <HorizontalSpace />}
        <RoomImage src={roomToUrl(room)}></RoomImage>
        {routes.right ? <HorizontalLine /> : <HorizontalSpace />}
      </Flex>
      {routes.bottom ? <VerticalLine /> : <VerticalSpace />}
    </RoomButton>
  )
}

export const DisableRoom: React.FC = () => {
  return (
    <RoomButton onClick={() => {}}>
      <VerticalSpace />
      <Flex>
        <HorizontalSpace />
        <div style={{ height: "48px", width: "48px" }} />
        <HorizontalSpace />
      </Flex>
      <VerticalSpace />
    </RoomButton>
  )
}

const RoomButton: React.FC<{ onClick: () => void }> = ({ onClick, children }) => {
  const StyledButton = styled(Button)`
    margin: 0;
    padding: 0;
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

  return (
    <StyledButton variant="outline-primary" onClick={onClick}>
      {children}
    </StyledButton>
  )
}

const RoomImage: React.FC<{ src: string }> = ({ src }) => {
  const StyledImage = styled.img`
    height: 48px;
    width: 48px;
  `

  return <StyledImage src={src} />
}

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const VerticalLine: React.FC = () => {
  return (
    <svg width="56px" height="4px">
      <line x1="28" y1="0" x2="28" y2="4" stroke="black" strokeWidth="1" />
    </svg>
  )
}

const VerticalSpace: React.FC = () => {
  return <svg width="56px" height="4px" />
}

const HorizontalLine: React.FC = () => {
  return (
    <svg width="4px" height="48px">
      <line x1="0" y1="24" x2="4" y2="24" stroke="black" strokeWidth="1" />
    </svg>
  )
}

const HorizontalSpace: React.FC = () => {
  return <svg width="4px" height="48px" />
}
