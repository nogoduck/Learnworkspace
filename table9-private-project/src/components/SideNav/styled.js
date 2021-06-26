import styled from "styled-components";

export const Container = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 100vh;

  & li {
    color: white;
    list-style: none;
    font-size: 2em;
  }
`;
