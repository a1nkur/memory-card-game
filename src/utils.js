export const imageArray = [
  { id: 0, matched: false, frontSideURL: "/images/cover.png", backSideURL: "/images/scroll-1.png" },
  { id: 1, matched: false, frontSideURL: "/images/cover.png", backSideURL: "/images/ring-1.png" },
  { id: 2, matched: false, frontSideURL: "/images/cover.png", backSideURL: "/images/helmet-1.png" },
  { id: 3, matched: false, frontSideURL: "/images/cover.png", backSideURL: "/images/sword-1.png" },
  { id: 4, matched: false, frontSideURL: "/images/cover.png", backSideURL: "/images/potion-1.png" },
  { id: 5, matched: false, frontSideURL: "/images/cover.png", backSideURL: "/images/ring-1.png" },
  { id: 6, matched: false, frontSideURL: "/images/cover.png", backSideURL: "/images/shield-1.png" },
  { id: 7, matched: false, frontSideURL: "/images/cover.png", backSideURL: "/images/helmet-1.png" },
  { id: 8, matched: false, frontSideURL: "/images/cover.png", backSideURL: "/images/scroll-1.png" },
  { id: 9, matched: false, frontSideURL: "/images/cover.png", backSideURL: "/images/potion-1.png" },
  { id: 10, matched: false, frontSideURL: "/images/cover.png", backSideURL: "/images/shield-1.png" },
  { id: 11, matched: false, frontSideURL: "/images/cover.png", backSideURL: "/images/sword-1.png" },
];

export const shuffler = (array, setImageCollection) => {
  const used = [];
  const shuffled = [];

  let randomNumberBetween0And11 = Math.floor(Math.random() * 12);

  for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
    while (used.includes(randomNumberBetween0And11)) {
      randomNumberBetween0And11 = Math.floor(Math.random() * 12);
    }

    used.push(randomNumberBetween0And11);

    shuffled.splice(randomNumberBetween0And11, 0, array[currentIndex]);
  }

  setImageCollection(shuffled);
};

// Alternative way to shuffle cards
const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

// shuffle cards for new game
const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5) // sort method fires this callback for each pair of item, if returned value < 0, order remains same otherwise it's swapped.
    .map(card => ({ ...card, id: Math.random() }));

  return shuffledCards;
};
