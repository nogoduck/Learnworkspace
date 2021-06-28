import styled from "styled-components";

export const Container = styled.div`
  /* border: 2px solid black;
  border-radius: 6px;
  background-color: blue;
  z-index: 1024;
  user-select: none;
  position: fixed; */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  & > div {
    position: absolute;
    display: inline-block;
    color: green;
    border: 1px solid red;
  }
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 32px;
  position: absolute;
  top: 40px;
  right: 2px;
  color: yellow;
`;
