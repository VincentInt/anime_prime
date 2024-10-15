const moveBanner = (move, bannerPages, bannerStatePage, dispatch) => {
  if (bannerPages.length) {
    let clone = bannerStatePage + move;
    let payload = clone;

    if (clone <= 0) payload = bannerPages.length;
    else if (clone > bannerPages.length) payload = 1;
    else payload = clone;

    dispatch(payload);
  }
};
export default moveBanner;
