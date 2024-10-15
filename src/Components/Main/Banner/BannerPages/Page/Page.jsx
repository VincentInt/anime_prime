import "./Page.css";
import { useRef } from "react";
import WhiteBtn from "../../../../../UI/Button/WhiteBtn/WhiteBtn";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Page = ({ item, index }) => {
  const params = useParams();

  const bannerStatePage = useSelector((state) => state.banner.statePages - 1);

  const infoTextRef = useRef();

  const onHandlerOverPage = () => {
    if (bannerStatePage === index) {
      const elem = infoTextRef.current.className;
      infoTextRef.current.className = elem + " " + "hover_page";
    }
  };
  const onHandlerOutPage = () => {
    if (bannerStatePage === index) {
      const elem = infoTextRef.current.className;
      infoTextRef.current.className = elem.split(" ").splice(0, 1)[0];
    }
  };
  return (
    <div
      onMouseOver={onHandlerOverPage}
      onMouseOut={onHandlerOutPage}
      className="container_banner_page_img"
    >
      <div ref={infoTextRef} className="container_hover_info_text">
        <div className="banner_page_blur"></div>
        <div className="container_info_text">
          <div className="info_text">
            <div className="container_info_text_title">
              <h2>{item.title}</h2>
              {item.studios.length ? (
                <div className="container_tags">
                  <h4>Studies:</h4>
                  {item.studios.map((item, index) => {
                    return (
                      <h5 key={index} className="h5_tags">
                        {item.name}
                      </h5>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
              {item.themes.length ? (
                <div className="container_tags">
                  <h4>Themes:</h4>
                  {item.themes.map((item, index) => {
                    return (
                      <h5 key={index} className="h5_tags">
                        {item.name}
                      </h5>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
              <p>
                {item.synopsis.length > 450
                  ? [...item.synopsis].splice(0, 450).join("") + "..."
                  : item.synopsis}
              </p>
            </div>
            <Link to={`/animeItem/${item.mal_id}`} state={params.type}>
              <WhiteBtn>
                <h2>View</h2>
              </WhiteBtn>
            </Link>
          </div>
        </div>
      </div>
      <img
        className="banner_page_img"
        src={item.trailer.images.maximum_image_url}
        alt={`banner_page_${item.title}`}
      />
    </div>
  );
};

export default Page;
