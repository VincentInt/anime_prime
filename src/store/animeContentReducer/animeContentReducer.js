const defaultSetting = {
  popularity: {
    key: "popularity",
    url: "https://api.jikan.moe/v4/anime?order_by=popularity",
    content: [],
    page: 1,
  },
  upcoming: {
    key: "upcoming",
    url: "https://api.jikan.moe/v4/anime?order_by=popularity&status=upcoming",
    content: [],
    page: 1,
  },
  score: {
    key: "score",
    url: "https://api.jikan.moe/v4/anime?sort=desc&order_by=score",
    content: [],
    page: 1,
  },
};

const GET_ANIME_CONTENT = "GET_ANIME_CONTENT";
const MOVE_PAGE_ANIME_CONTENT = "MOVE_PAGE_ANIME_CONTENT";
const CLEAR_ANIME_CONTENT = "CLEAR_ANIME_CONTENT";

export const ASYNC_GET_ANIME_CONTENT = "ASYNC_GET_ANIME_CONTENT";

export const animeContentReducer = (state = defaultSetting, action) => {
  switch (action.type) {
    case GET_ANIME_CONTENT:
      state[action.key].content = [
        ...state[action.key].content,
        ...action.payload,
      ];
      return { ...state };
    case MOVE_PAGE_ANIME_CONTENT:
      state[action.key].page += 1;
      return { ...state };
    case CLEAR_ANIME_CONTENT:
      state[action.key].content = [];
      return { ...state };
    default:
      return state;
  }
};
export const getAnimeContentAction = (payload, key) => ({
  type: GET_ANIME_CONTENT,
  payload,
  key,
});
export const movePageAnimeContentAction = (key) => ({
  type: MOVE_PAGE_ANIME_CONTENT,
  key,
});
export const clearAnimeContentAction = (key) => ({
  type: CLEAR_ANIME_CONTENT,
  key,
});
export const asyncGetAnimeContentAction = (payload, callback) => ({
  type: ASYNC_GET_ANIME_CONTENT,
  payload,
  callback,
});
