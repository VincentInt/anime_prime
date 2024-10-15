import { Link, useLocation } from "react-router-dom";
import "./BlueLink.css"

const BlueLink = ({ children, pathName, state = null }) => {
  const location = useLocation()

  
  return <Link className={location.pathname === pathName ? "blue_link_active" :"blue_link"} to={{ pathname: pathName, state: state }}>{children}</Link>;
};

export default BlueLink;
