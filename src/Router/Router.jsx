import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Page/MainPage/MainPage";
import Layout from "./Layout/Layout";
import AnimeItemPage from "../Page/AnimeItemPage/AnimeItemPage";
import SingPage from "../Page/SingPage/SingPage";

const Router = () => {
  return (
    <BrowserRouter basename="/anime_prime.io/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":type/" element={<MainPage />} />
          <Route path="animeItem/:id" element={<AnimeItemPage />} />
        </Route>
        <Route path="sing" element={<SingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
