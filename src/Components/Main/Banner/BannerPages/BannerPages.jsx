import "./BannerPages.css";
import { useRef } from "react";
import Page from "./Page/Page";
import { useSelector } from "react-redux";

const BannerPages = () => {
  const bannerPageRef = useRef();

  const bannerAnime = useSelector((state) => state.banner);

  const translateFunc = () => {
    if (bannerAnime.statePages === 1) return `translateX(-0px)`;
    else
      return `translateX(-${
        (bannerAnime.statePages - 1) * bannerPageRef.current?.clientWidth +
        45 * (bannerAnime.statePages - 1)
      }px)`;
  };
  return (
    <div
      ref={bannerPageRef}
      style={{ transform: translateFunc() }}
      className="container_banner_page"
    >
      {bannerAnime.pages.map((item, index) => {
        return <Page key={index} index={index} item={item} />;
      })}
    </div>
  );
};

export default BannerPages;
