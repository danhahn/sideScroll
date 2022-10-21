import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Buttons from "./Buttons";

const Wrapper = styled.div`
  padding-top: 10px;
`;

const Carousel = styled.ul`
  all: unset;
  list-style: none;
  display: flex;
  gap: 24px;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scroll-margin: 40px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  li {
    scroll-snap-align: start;
    scroll-margin: var(--offset);
    &:first-of-type {
      padding-left: var(--offset);
    }
    &:last-of-type {
      padding-right: var(--offset);
    }
  }
`;

type Props = {
  cards: string[];
};

const SideScroll: React.FC<Props> = ({ cards }) => {
  return (
    <Wrapper>
      <Carousel>
        {cards.map((card) => (
          <li key={card}>
            <Card title={card} />
          </li>
        ))}
      </Carousel>
      <Buttons
        handlePrev={() => console.log("prev")}
        handleNext={() => console.log("next")}
      />
    </Wrapper>
  );
};

export default SideScroll;
