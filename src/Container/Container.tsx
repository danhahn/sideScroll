import React, { ReactElement, ElementType } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

type Props = {
  children: ReactElement | ReactElement[];
  as?: ElementType;
};

const Container: React.FC<Props> = ({ children, as }) => {
  return <StyledContainer as={as}>{children}</StyledContainer>;
};

export default Container;
