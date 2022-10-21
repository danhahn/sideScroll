import { createGlobalStyle } from "styled-components";
import SideScroll from "./SideScroll/SideScroll";
import Container from "./Container/Container";

const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1224px;
    --offset: max(calc((100vw - var(--max-width)) /2), 24px);
  }

  body {
    margin: 0;
  }
`;

export default function App() {
  return (
    <div className="App">
      <Container as="header">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Container>

      <SideScroll cards={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]} />
      <Container as="footer">
        <p>footer</p>
      </Container>
      <GlobalStyle />
    </div>
  );
}
