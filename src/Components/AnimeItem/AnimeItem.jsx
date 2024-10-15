import "./AnimeItem.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch/useFetch";
import InfoAnimeItem from "./InfoAnimeItem/InfoAnimeItem";

const AnimeItem = () => {
  const params = useParams();

  const URL_ANIME_ITEM = `https://api.jikan.moe/v4/anime/${params.id}/full`;
  const [animeItem, setAnimeItem, request] = useFetch(URL_ANIME_ITEM);

  return (
    <div className="container_anime_item">
      <img
        className="img_anime_item"
        src={
          animeItem?.data?.trailer?.images?.maximum_image_url
            ? animeItem?.data?.trailer?.images?.maximum_image_url
            : animeItem?.data?.images?.jpg?.image_url
        }
        alt="img_anime_item"
      />
      <h2 className="title_text">{animeItem?.data?.title}</h2>
      <p>{animeItem?.data?.synopsis}</p>
      <div className="container_info_anime_item">
        <InfoAnimeItem animeData={animeItem?.data} />
      </div>
      {animeItem?.data?.trailer?.embed_url ? (
        <>
          <h2 className="trailer_text">Trailer:</h2>
          <div className="container_trailer">
            <iframe
              className="window_trailer"
              src={animeItem?.data?.trailer?.embed_url}
            ></iframe>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default AnimeItem;
