import { useSelector } from "react-redux";
import AnimeItemCategory from "./AnimeItemCategory/AnimeItemCategory";

const AnimeContent = () => {
  const animeContent = useSelector((state) => state.animeContent);

  return (
    <>
      <AnimeItemCategory
        title={"Popularity"}
        animeContent={animeContent.popularity}
      />
      <AnimeItemCategory
        title={"Upcoming"}
        animeContent={animeContent.upcoming}
      />
      <AnimeItemCategory 
        title={"Score"}
        animeContent={animeContent.score} 
      />
    </>
  );
};

export default AnimeContent;
