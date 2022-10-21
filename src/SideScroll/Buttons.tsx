import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  --width: 32px;
  all: unset;
  border: 2px solid black;
  border-radius: 50%;
  width: var(--width);
  height: var(--width);
  text-align: center;
  display: grid;
  place-items: center;
  cursor: pointer;
  &:hover {
    background-color: lightcyan;
  }
`;

type Props = {
  title?: string;
  handleNext: () => void;
  handlePrev: () => void;
};

const Button: React.FC<{ onClick: () => void }> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

const Buttons: React.FC<Props> = ({ title, handleNext, handlePrev }) => {
  return (
    <Container>
      <Wrapper>
        <Button onClick={handleNext}>
          <span className="material-symbols-outlined">chevron_left</span>
        </Button>
        <Button onClick={handlePrev}>
          <span className="material-symbols-outlined">chevron_right</span>
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Buttons;
