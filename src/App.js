import { useState } from "react";
import styled from "styled-components";
import Playground from "./components/playground.component";
import GlobalStyle from "./GlobalStyles";

function App() {
  const [turnCount, setTurnCount] = useState(0);

  // Start new game
  const handleNewGame = () => {
    setTurnCount(0);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Playground turnCount={turnCount} setTurnCount={setTurnCount} handleNewGame={handleNewGame} />
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
