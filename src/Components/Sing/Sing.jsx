import "./Sing.css";
import CustomInput from "../../UI/Input/CustomInput";
import BlueBtn from "../../UI/Button/BlueBtn/BlueBtn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserAction,
  loginUserAction,
} from "../../store/userReducer/userReducer";

const Sing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { usersData } = useSelector((state) => state.user);

  const [usersSingError, setUsersSingError] = useState(false);
  const [inputs, setInputs] = useState({
    userName: "",
    login: "",
    password: "",
    repeatPassword: "",
  });

  const onChangeFunc = (event, key) => {
    setInputs((prev) => {
      const clone = { ...prev };
      clone[key] = event.target.value;
      return clone;
    });
  };
  const handlerClickSend = (event) => {
    event.preventDefault();

    const { login, userName, password } = inputs;

    if (inputs.password === inputs.repeatPassword) {
      const searchRepeat = usersData.filter((item) => {
        return item.login === login && item.userName === userName;
      });
      if (!searchRepeat.length) {
        dispatch(
          addUserAction({
            userName: userName,
            login: login,
            password: password,
          })
        );
        dispatch(
          loginUserAction({
            userName: userName,
            login: login,
            password: password,
          })
        );
        setInputs({
          userName: "",
          login: "",
          password: "",
          repeatPassword: "",
        });
        navigate("/");
      } else {
        setUsersSingError(true);
      }
    }
  };
  return (
    <div className="container_sing">
      <form>
        <h2>Sing</h2>
        <div className="container_input">
          {usersSingError ? (
            <h5 className="sing_error">
              Аккаунт с таким логином уже существует
            </h5>
          ) : (
            ""
          )}
          <CustomInput
            value={inputs.userName}
            onChange={(event) => onChangeFunc(event, "userName")}
            placeholder="User Name"
          />
          <CustomInput
            value={inputs.login}
            onChange={(event) => onChangeFunc(event, "login")}
            placeholder="Login"
          />
          <CustomInput
            value={inputs.password}
            onChange={(event) => onChangeFunc(event, "password")}
            type={"password"}
            placeholder="Password"
          />
          <CustomInput
            value={inputs.repeatPassword}
            style={
              inputs.password === inputs.repeatPassword
                ? { border: "1px solid white" }
                : { border: "1px solid red" }
            }
            onChange={(event) => onChangeFunc(event, "repeatPassword")}
            type={"password"}
            placeholder="Repeat Password"
          />
        </div>
        <BlueBtn change={handlerClickSend}>
          <h3>Send</h3>
        </BlueBtn>
      </form>
    </div>
  );
};

export default Sing;
