import React from "react";
import { Container, CloseButton } from "./styled";
function Menu() {
  return (
    <Container>
      로그인폼
      <br />
      <input type="text" />
      <CloseButton>x</CloseButton>
      <CloseButton>X</CloseButton>
      <CloseButton>&times;</CloseButton>
      <CloseButton>Ⅹ</CloseButton>
      <CloseButton>×</CloseButton>
    </Container>
  );
}

export default Menu;
