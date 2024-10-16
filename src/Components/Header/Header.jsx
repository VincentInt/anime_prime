import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import BlueBtn from "../../UI/Button/BlueBtn/BlueBtn";
import WhiteBtn from "../../UI/Button/WhiteBtn/WhiteBtn";
import exitImg from "../../assets/Img/Icon/icons8-exit-60.png";
import { useDispatch, useSelector } from "react-redux";
import { leaveUserAction } from "../../store/userReducer/userReducer";

const Header = () => {
  const locate = useLocation();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.user.userLogin);

  const handlerClickLeaveLogin = () => {
    dispatch(leaveUserAction());
  };
  return (
    <header>
      <Link to={locate.state ? `/anime_prime.io/${locate.state}` : "/anime_prime.io"}>
        <h2>
          Anime <span className="logo_prime">Prime</span>
        </h2>
      </Link>
      <div className="container_header_btn_reg">
        {userLogin.statusLogin ? (
          <>
            <h2>{userLogin.userName}</h2>
            <WhiteBtn
              change={() => handlerClickLeaveLogin()}
              style={{ padding: "5px 8px" }}
            >
              <img className="icon_exit" src={exitImg} alt="login_exit_img" />
            </WhiteBtn>
          </>
        ) : (
          <>
            <WhiteBtn>
              <h3>Log In</h3>
            </WhiteBtn>
            <Link to={"/anime_prime.io/sing"}>
              <BlueBtn>
                <h3>Sing</h3>
              </BlueBtn>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
