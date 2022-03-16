import styled from "styled-components";
import Card from "./card.component";

const CardGrid = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default CardGrid;

const Container = styled.div`
  width: 50%;
  margin: auto;
  /* border: 1px solid yellow; */
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
