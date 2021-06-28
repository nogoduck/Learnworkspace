import React from "react";
import { Container, CloseButton } from "./styled";

function Menu({ children, onCloseModal, style }) {
  return (
    <Container style={style}>
      <CloseButton onClick={onCloseModal}>&times;</CloseButton>
      {children}
    </Container>
  );
}

export default Menu;
