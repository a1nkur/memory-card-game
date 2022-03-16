import styled from "styled-components";

const Card = () => {
  return (
    <Container>
      <div className="inner">
        <div className="card-front">
          <img src="/images/cover.png" alt="front-side" />
        </div>
        <div className="card-back">
          <img src="/images/helmet-1.png" alt="back-side" />
        </div>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  height: 10rem;
  width: 10rem;
  cursor: pointer;
  background-color: transparent;
  perspective: 1000px;

  &:hover {
    transform: rotateY(180deg);

    .inner {
      transform: rotateY(180deg);
    }
  }

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .card-front {
  }

  .card-back {
    transform: rotateY(180deg);
  }
`;
