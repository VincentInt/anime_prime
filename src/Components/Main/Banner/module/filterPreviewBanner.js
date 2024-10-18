const filterPreviewBanner = (bannerData, dispatch) => {
  const filteredArray = [];

  for (const item of bannerData) {
    const trailerImg = item.trailer.images.maximum_image_url;
    if (trailerImg == null) continue;
    const img = new Image();
    img.onload = function () {
      if (this.width > 500) {
        filteredArray.push(item);
      }
    };
    try {
      img.src = trailerImg;
    } catch (error) {
      return false;
    }
  }
  setTimeout(() => dispatch(filteredArray), 500);
};
export default filterPreviewBanner;
