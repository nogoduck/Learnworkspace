import React from "react";
import { Container, CloseButton } from "./styled";

function Menu({ children, onCloseModal }) {
  return (
    <Container>
      메뉴 모달
      <br />
      <input type="text" />
      <CloseButton onClick={onCloseModal}>&times;</CloseButton>
      {children}
    </Container>
  );
}

export default Menu;
