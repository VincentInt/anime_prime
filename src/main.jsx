import "./index.css";
import Router from "./Router/Router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
