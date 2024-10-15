import "./Banner.css";
import { useEffect } from "react";
import BannerPages from "./BannerPages/BannerPages";
import intervalMoveBanner from "./module/IntervalMoveBanner";
import moveBanner from "./module/moveBanner";
import filterPreviewBanner from "./module/filterPreviewBanner";
import leftIconImg from "../../../assets/Img/Icon/icons8-arrow-100-l.png";
import rightIconImg from "../../../assets/Img/Icon/icons8-arrow-100-r.png";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addPagesBannerAction,
  asyncGetBannerAction,
  moveStatePageBannerAction,
} from "../../../store/bannerReducer/bannerReducer";
import { addQueueCompAction } from "../../../store/queueCompReducer/queueCompReducer";

const Banner = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const bannerAnime = useSelector((state) => state.banner);

  useEffect(() => {
    if (params.type) {
      const URL_ANIME_BANNER = `https://api.jikan.moe/v4/top/anime?type=${params.type}`;

      dispatch(
        addQueueCompAction({
          callback: () => {
            dispatch(asyncGetBannerAction(URL_ANIME_BANNER));
            dispatch(moveStatePageBannerAction(1));
          },
        })
      );
    }
  }, [params]);

  useEffect(() => {
    if (bannerAnime.data) {
      filterPreviewBanner(bannerAnime.data, (payload) =>
        dispatch(addPagesBannerAction(payload))
      );
    }
  }, [bannerAnime.data]);

  useEffect(() => {
    if (bannerAnime.pages.length) {
      const intervalClear = intervalMoveBanner(
        bannerAnime.pages,
        bannerAnime.statePages,
        (payload) => dispatch(moveStatePageBannerAction(payload))
      );
      return () => intervalClear();
    }
  }, [bannerAnime.pages, bannerAnime.statePages]);

  return (
    <div>
      <div className="container_banner">
        <button
          onClick={
            bannerAnime.pages.length
              ? () =>
                  moveBanner(
                    -1,
                    bannerAnime.pages,
                    bannerAnime.statePages,
                    (payload) => dispatch(moveStatePageBannerAction(payload))
                  )
              : () => {}
          }
          className="btn_banner"
        >
          <img
            className="icon_btn_banner"
            src={leftIconImg}
            alt="left_banner_btn"
          />
        </button>
        <div className="container_window_banner">
          <div className="banner_box_shadow"></div>
          <div className="window_banner">
            {bannerAnime.pages.length ? (
              <BannerPages />
            ) : (
              <div className="loading_banner"></div>
            )}
          </div>
        </div>
        <button
          onClick={
            bannerAnime.pages.length
              ? () =>
                  moveBanner(
                    1,
                    bannerAnime.pages,
                    bannerAnime.statePages,
                    (payload) => dispatch(moveStatePageBannerAction(payload))
                  )
              : () => {}
          }
          className="btn_banner"
        >
          <img
            className="icon_btn_banner"
            src={rightIconImg}
            alt="left_banner_btn"
          />
        </button>
      </div>
    </div>
  );
};

export default Banner;
