import "./AnimeItemCategory.css";
import { useEffect, useState } from "react";
import AnimeCards from "./AnimeCards/AnimeCards";
import arrowImg from "../../../../assets/Img/Icon/icons8-arrow-100-l.png";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  asyncGetAnimeContentAction,
  clearAnimeContentAction,
  getAnimeContentAction,
  movePageAnimeContentAction,
} from "../../../../store/animeContentReducer/animeContentReducer";
import { addQueueCompAction } from "../../../../store/queueCompReducer/queueCompReducer";

const AnimeItemCategory = ({ title, animeContent }) => {
  const params = useParams();

  const dispatch = useDispatch();

  const [stateMorePage, setStateMorePage] = useState(0);

  useEffect(() => {
    if (params.type) {
      dispatch(
        addQueueCompAction({
          callback: () =>
            dispatch(
              asyncGetAnimeContentAction(
                `${animeContent.url}&type=${params.type}&page=${animeContent.page}`,
                (payload) => getAnimeContentAction(payload, animeContent.key)
              )
            ),
        })
      );
    }
  }, [params, animeContent.page]);

  useEffect(() => {
    dispatch(clearAnimeContentAction(animeContent.key));
  }, [params]);

  const handlerMoreAnimeCardClick = () => {
    if ((stateMorePage + 1) * 25 > animeContent.content.length) {
      dispatch(movePageAnimeContentAction(animeContent.key));
      setStateMorePage((prev) => prev + 1);
    } else {
      setStateMorePage((prev) => prev + 1);
    }
  };
  return (
    <div className="container_anime_category">
      <div className="container_title">
        <h2 className="text_title">{title}:</h2>
        {stateMorePage !== 0 ? (
          <button
            className="btn_roll_up"
            onClick={
              animeContent.content.length ? () => setStateMorePage(0) : () => {}
            }
          >
            <h2>Roll up Anime </h2>
            <img className="arrow_down_img" src={arrowImg} alt="arrow_up_img" />
          </button>
        ) : (
          <button
            className="btn_roll_up"
            onClick={
              animeContent.content.length
                ? () => handlerMoreAnimeCardClick()
                : () => {}
            }
          >
            <h2>More Anime </h2>
            <img className="arrow_up_img" src={arrowImg} alt="arrow_up_img" />
          </button>
        )}
      </div>
      <div className="container_card_anime_category">
        <AnimeCards stateMorePage={stateMorePage} animeContent={animeContent} />
      </div>
      {stateMorePage ? (
        <div className="container_btn_more_anime_card">
          <button
            onClick={handlerMoreAnimeCardClick}
            className="btn_more_anime_card"
          >
            <h3>More anime</h3>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AnimeItemCategory;
