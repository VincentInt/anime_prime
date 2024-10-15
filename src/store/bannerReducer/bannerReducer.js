const defaultSetting = {
  data: [],
  pages: [],
  statePages: 1,
};

const GET_BANNER = "GET_BANNER";
const ADD_PAGES_BANNER = "ADD_PAGES_BANNER";
const MOVE_STATE_PAGE_BANNER = "MOVE_STATE_PAGE_BANNER";

export const ASYNC_GET_BANNER = "ASYNC_GET_BANNER";

export const bannerReducer = (state = defaultSetting, action) => {
  switch (action.type) {
    case GET_BANNER:
      return { ...state, data: [...action.payload] };
    case ADD_PAGES_BANNER:
      return { ...state, pages: [...action.payload] };
    case MOVE_STATE_PAGE_BANNER:
      return { ...state, statePages: action.payload };
    default:
      return state;
  }
};

export const getBannerAction = (payload) => ({ type: GET_BANNER, payload });
export const addPagesBannerAction = (payload) => ({
  type: ADD_PAGES_BANNER,
  payload,
});
export const moveStatePageBannerAction = (payload) => ({
  type: MOVE_STATE_PAGE_BANNER,
  payload,
});
export const asyncGetBannerAction = (payload) => ({
  type: ASYNC_GET_BANNER,
  callback: (payload) => getBannerAction(payload),
  payload,
});
