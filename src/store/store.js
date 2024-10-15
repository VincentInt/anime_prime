import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./userReducer/userReducer";
import { queueCompReducer } from "./queueCompReducer/queueCompReducer";
import { bannerReducer } from "./bannerReducer/bannerReducer";
import createSagaMiddleware from "redux-saga";
import { rootSagaReducer } from "../Components/saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { animeContentReducer } from "./animeContentReducer/animeContentReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  queue: queueCompReducer,
  user: userReducer,
  banner: bannerReducer,
  animeContent: animeContentReducer
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSagaReducer);
