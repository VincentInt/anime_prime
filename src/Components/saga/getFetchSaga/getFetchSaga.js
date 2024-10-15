import { call, delay, put, takeEvery } from "redux-saga/effects";
import { ASYNC_GET_BANNER } from "../../../store/bannerReducer/bannerReducer";
import { ASYNC_GET_ANIME_CONTENT } from "../../../store/animeContentReducer/animeContentReducer";
import axios from "axios";

function* getFetchWatcher(action) {
  const data = yield call(() =>
    axios
      .get(action.payload)
      .then((res) => res)
      .catch((err) => console.error(err))
  );
  if (data?.status == 429) {
    yield delay(2500);
    yield getFetchWatcher(action);
  } else {
    yield put(action.callback(data.data.data));
  }
}
export function* fetchWatcher() {
  yield takeEvery(ASYNC_GET_BANNER, getFetchWatcher);
  yield takeEvery(ASYNC_GET_ANIME_CONTENT, getFetchWatcher);
}
