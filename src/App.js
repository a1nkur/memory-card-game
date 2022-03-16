import styled from "styled-components";
import Playground from "./components/playground.component";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Playground />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  place-items: center;

  background-color: #1c1525;
`;
