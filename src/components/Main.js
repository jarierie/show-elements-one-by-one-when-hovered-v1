import React from "react";
import styled from "styled-components";
import ChangeLetters from "./ChangeLetter";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0d0d0d;
`;

const Main = () => {
  return (
    <>
      <Container>
        <ChangeLetters word={"nice"}></ChangeLetters>
        <ChangeLetters word={"woah it's working"}></ChangeLetters>
        <ChangeLetters word={"took me too long :("}></ChangeLetters>
        <ChangeLetters word={"an hour and a half :<"}></ChangeLetters>
      </Container>{" "}
    </>
  );
};

export default Main;
