import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: grid;
  gap: 24px;
  img {
    display: block;
    border-radius: 12px;
    transition: scale 150ms ease-in-out;
    box-shadow: 0 2px 10px -2px #00000066;
    &:hover {
      scale: 1.02;
      box-shadow: 0 2px 10px 2px #00000066;
    }
  }
  p {
    all: unset;
  }
`;

type Props = {
  title?: string;
};

const Card: React.FC<Props> = ({ title }) => {
  return (
    <StyledCard>
      <img src="https://via.placeholder.com/288x192/bada55" alt="" />
      <p>{title}</p>
    </StyledCard>
  );
};

export default Card;
