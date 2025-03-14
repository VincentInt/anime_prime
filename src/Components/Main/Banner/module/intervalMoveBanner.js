import moveBanner from "./moveBanner.js";

const intervalMoveBanner = (bannerPages, bannerStatePage, dispatch) => {
  const interval = setInterval(() => {
    moveBanner(1, bannerPages, bannerStatePage, dispatch);
  }, 10000);

  return () => clearInterval(interval);
};
export default intervalMoveBanner;
