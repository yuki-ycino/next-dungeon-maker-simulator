import React from "react"
import { Container } from "react-bootstrap"

export const Main: React.FC = ({ children }) => {
  return <Container className="mt-4">{children}</Container>
}
