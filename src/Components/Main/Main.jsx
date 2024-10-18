import { useNavigate, useParams } from "react-router-dom";
import Banner from "./Banner/Banner";
import Navigation from "./Navigation/Navigation";
import AnimeContent from "./AnimeContent/AnimeContent";
import { useEffect } from "react";

const Main = () => {
  const params = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!params.type) {
      navigate("/movie");
    }
  }, [params]);
  return (
    <main>
      <Navigation  />
      <Banner />
      <AnimeContent  />
    </main>
  );
};

export default Main;
