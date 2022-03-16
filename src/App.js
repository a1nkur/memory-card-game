import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Playground from "./components/playground.component";
import GlobalStyle from "./GlobalStyles";
import { imageArray, shuffler } from "./utils";

function App() {
  const [turnCount, setTurnCount] = useState(0);
  const [imageCollection, setImageCollection] = useState([]);

  useEffect(() => {
    shuffler(imageArray, setImageCollection);
  }, []);

  // Start new game
  const handleNewGame = () => {
    setTurnCount(0);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Playground
        turnCount={turnCount}
        setTurnCount={setTurnCount}
        handleNewGame={handleNewGame}
        imageCollection={imageCollection}
      />
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
