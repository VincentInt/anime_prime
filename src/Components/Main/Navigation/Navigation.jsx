import "./Navigation.css";
import BlueLink from "../../../UI/Link/BlueLink/BlueLink";

const Navigation = () => {
  return (
    <nav className="main_navigation">
      <BlueLink pathName={"/movie"}>
        <h3>Movie</h3>
      </BlueLink>
      <BlueLink pathName={"/ova"}>
        <h3>Ova</h3>
      </BlueLink>
      <BlueLink pathName={"/ona"}>
        <h3>Ona</h3>
      </BlueLink>
      <BlueLink pathName={"/tv"}>
        <h3>Tv</h3>
      </BlueLink>
      <BlueLink pathName={"/music"}>
        <h3>Music</h3>
      </BlueLink>
    </nav>
  );
};

export default Navigation;
