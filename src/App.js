import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Playground from "./components/playground.component";
import GlobalStyle from "./GlobalStyles";
import { imageArray, shuffler } from "./utils";

function App() {
  const [turnCount, setTurnCount] = useState(0);
  const [imageCollection, setImageCollection] = useState([]);
  const [selected, setSelected] = useState({
    last: { url: "", id: "" },
    current: { url: "", id: "" },
  });

  // ? optimize
  useEffect(() => {
    shuffler(imageArray, setImageCollection);
  }, []);

  // Reset Game
  const handleNewGame = () => {
    setTurnCount(0);

    shuffler(imageArray, setImageCollection);

    setSelected({
      last: { url: "", id: "" },
      current: { url: "", id: "" },
    });
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Playground
        turnCount={turnCount}
        setTurnCount={setTurnCount}
        handleNewGame={handleNewGame}
        imageCollection={imageCollection}
        selected={selected}
        setSelected={setSelected}
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
