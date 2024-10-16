import "./Navigation.css";
import BlueLink from "../../../UI/Link/BlueLink/BlueLink";

const Navigation = () => {
  return (
    <nav className="main_navigation">
      <BlueLink pathName={"/anime_prime.io/movie"}>
        <h3>Movie</h3>
      </BlueLink>
      <BlueLink pathName={"/anime_prime.io/ova"}>
        <h3>Ova</h3>
      </BlueLink>
      <BlueLink pathName={"/anime_prime.io/ona"}>
        <h3>Ona</h3>
      </BlueLink>
      <BlueLink pathName={"/anime_prime.io/tv"}>
     
        <h3>Tv</h3>
      </BlueLink>
      <BlueLink pathName={"/anime_prime.io/music"}>
        <h3>Music</h3>
      </BlueLink>
    </nav>
  );
};

export default Navigation;
