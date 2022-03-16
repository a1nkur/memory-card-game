import styled from "styled-components";
import Card from "./card.component";

const CardGrid = ({ setTurnCount }) => {
  const imageArray = [
    { frontSideURL: "/images/cover.png", backSideURL: "/images/ring-1.png" },
    { frontSideURL: "/images/cover.png", backSideURL: "/images/helmet-1.png" },
    { frontSideURL: "/images/cover.png", backSideURL: "/images/sword-1.png" },
    { frontSideURL: "/images/cover.png", backSideURL: "/images/potion-1.png" },
    { frontSideURL: "/images/cover.png", backSideURL: "/images/ring-1.png" },
    { frontSideURL: "/images/cover.png", backSideURL: "/images/shield-1.png" },
    { frontSideURL: "/images/cover.png", backSideURL: "/images/helmet-1.png" },
    { frontSideURL: "/images/cover.png", backSideURL: "/images/scroll-1.png" },
    { frontSideURL: "/images/cover.png", backSideURL: "/images/potion-1.png" },
    { frontSideURL: "/images/cover.png", backSideURL: "/images/shield-1.png" },
    { frontSideURL: "/images/cover.png", backSideURL: "/images/sword-1.png" },
    { frontSideURL: "/images/cover.png", backSideURL: "/images/scroll-1.png" },
  ];

  return (
    <Container>
      {imageArray.map(tile => (
        <Card setTurnCount={setTurnCount} tile={tile} />
      ))}
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
