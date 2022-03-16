import styled from "styled-components";
import CardGrid from "./card-grid.component";

const Playground = ({ turnCount, setTurnCount, handleNewGame }) => {
  return (
    <Container>
      <div className="row-1">
        <h1 className="title">Memory Match | Turn Count : {turnCount}</h1>
      </div>
      <div className="row-2">
        <button onClick={handleNewGame}>New Game</button>
      </div>
      <div className="row-3">
        <CardGrid setTurnCount={setTurnCount} />
      </div>
    </Container>
  );
};

export default Playground;

const Container = styled.div`
  height: 90vh;
  width: 90vw;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5vh 10vh 75vh;

  .row-1 {
    display: grid;
    place-items: center;

    h1.title {
      color: #fff;
      font-size: 2rem;
    }
  }

  .row-2 {
    display: grid;
    place-items: center;

    button {
      border: 1px solid #fff;
      background-color: transparent;
      color: #fff;
      padding: 0.5rem 0.8rem;
      border-radius: 3px;
      cursor: pointer;
    }
  }

  .row-3 {
  }
`;
