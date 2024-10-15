import "./AnimeCards.css";
import eyesImg from "../../../../../assets/Img/Icon/icons8-eye-90.png";
import starImg from "../../../../../assets/Img/Icon/icons8-star-100.png";
import { Link, useParams } from "react-router-dom";

const AnimeCards = ({ stateMorePage, animeContent }) => {
  const params = useParams();
  return (
    <div className="container_anime_card">
      {animeContent.content.length ? (
        animeContent.content
          .slice(0, stateMorePage === 0 ? 5 : 25 * stateMorePage)
          .map((item, index) => {
            return (
              <Link
                to={`/animeItem/${item.mal_id}`}
                state={params.type}
                style={{ backgroundImage: `url(${item.images.jpg.image_url})` }}
                className="anime_card"
                key={index}
              >
                <div className="container_info_anime_card">
                  <div className="container_text_anime_card">
                    <div className="flex_item_text_anime_card">
                      <img src={starImg} alt="score_img" />
                      <h4>{item.score}</h4>
                    </div>
                    <div className="flex_item_text_anime_card">
                      <img src={eyesImg} alt="score_img" />
                      <h4>{item.members}</h4>
                    </div>

                    <div className="container_flex_title">
                      <h3>{item.title}</h3>
                      <div className="flex_item_text_anime_card">
                        <h5>{item.aired.string.split(",")[1]}</h5>
                        <div className="line"></div>
                        <h5>
                          {item.episodes == 1
                            ? item.duration
                            : item.episodes + " episode"}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
      ) : (
        <>
          <div className="loading_anime_item_card"></div>
          <div className="loading_anime_item_card"></div>
          <div className="loading_anime_item_card"></div>
          <div className="loading_anime_item_card"></div>
          <div className="loading_anime_item_card"></div>
        </>
      )}
    </div>
  );
};

export default AnimeCards;
