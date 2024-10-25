import "./Login.css";
import { useState } from "react";
import BlueBtn from "../../UI/Button/BlueBtn/BlueBtn";
import CustomInput from "../../UI/Input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../store/userReducer/userReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { usersData } = useSelector((prev) => prev.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ login: "", password: "" });
  const [statusErrorLogin, setStatusErrorLogin] = useState(false);

  const onChangeFunc = (event, typeInput) => {
    setInputs((prev) => {
      const clone = { ...prev };
      clone[typeInput] = event.target.value;
      return clone;
    });
  };
  const handlerClickSend = (e) => {
    e.preventDefault();
    const { login, password } = inputs;
    const userLogin = usersData.filter((item) => {
      return item.login === login && item.password === password;
    })[0];
    if (userLogin) {
      dispatch(loginUserAction(userLogin));
      navigate("/");
    } else {
      setStatusErrorLogin(true);
    }
  };
  return (
    <div className="container_sing">
      <form>
        <h2>Sing</h2>

        <div className="container_input">
          {statusErrorLogin ? (
            <h5 className="login_error">Неправилый логин или пороль</h5>
          ) : (
            ""
          )}
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
        </div>
        <BlueBtn change={handlerClickSend}>
          <h3>Send</h3>
        </BlueBtn>
      </form>
    </div>
  );
};

export default Login;
