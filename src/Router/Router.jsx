import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Page/MainPage/MainPage";
import Layout from "./Layout/Layout";
import AnimeItemPage from "../Page/AnimeItemPage/AnimeItemPage";
import SingPage from "../Page/SingPage/SingPage";
import LoginPage from "../Page/LoginPage/LoginPage"

const Router = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":type/" element={<MainPage />} />
          <Route path="animeItem/:id" element={<AnimeItemPage />} />
        </Route>
        <Route path="sing" element={<SingPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
