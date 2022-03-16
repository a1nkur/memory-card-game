import styled from "styled-components";
import Card from "./card.component";

const CardGrid = ({ setTurnCount, imageCollection, setSelected, selected }) => {
  return (
    <Container>
      {imageCollection.map(tile => (
        <Card
          setTurnCount={setTurnCount}
          tile={tile}
          key={tile.id}
          selected={selected}
          setSelected={setSelected}
          ShowBackSide={selected.current.id === tile.id}
        />
      ))}
    </Container>
  );
};

export default CardGrid;

const Container = styled.div`
  width: 50%;
  margin: auto;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
