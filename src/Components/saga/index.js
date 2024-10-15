import { all } from "redux-saga/effects";
import {fetchWatcher} from "./getFetchSaga/getFetchSaga"

export function* rootSagaReducer () {
    yield all([fetchWatcher()])
}