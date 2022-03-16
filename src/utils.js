export const imageArray = [
  { id: 1, frontSideURL: "/images/cover.png", backSideURL: "/images/ring-1.png" },
  { id: 2, frontSideURL: "/images/cover.png", backSideURL: "/images/helmet-1.png" },
  { id: 3, frontSideURL: "/images/cover.png", backSideURL: "/images/sword-1.png" },
  { id: 4, frontSideURL: "/images/cover.png", backSideURL: "/images/potion-1.png" },
  { id: 5, frontSideURL: "/images/cover.png", backSideURL: "/images/ring-1.png" },
  { id: 6, frontSideURL: "/images/cover.png", backSideURL: "/images/shield-1.png" },
  { id: 7, frontSideURL: "/images/cover.png", backSideURL: "/images/helmet-1.png" },
  { id: 8, frontSideURL: "/images/cover.png", backSideURL: "/images/scroll-1.png" },
  { id: 9, frontSideURL: "/images/cover.png", backSideURL: "/images/potion-1.png" },
  { id: 10, frontSideURL: "/images/cover.png", backSideURL: "/images/shield-1.png" },
  { id: 12, frontSideURL: "/images/cover.png", backSideURL: "/images/sword-1.png" },
  { id: 0, frontSideURL: "/images/cover.png", backSideURL: "/images/scroll-1.png" },
];

export const shuffler = (array, setImageCollection) => {
  const used = [];
  const shuffled = [];

  let randomNumberBetween0And11 = Math.floor(Math.random() * 12);

  for (let x = 0; x < array.length; x++) {
    while (used.includes(randomNumberBetween0And11)) {
      randomNumberBetween0And11 = Math.floor(Math.random() * 12);
    }

    used.push(randomNumberBetween0And11);

    shuffled.splice(randomNumberBetween0And11, 0, array[x]);
  }

  setImageCollection(shuffled);
};
