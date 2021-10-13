import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoginView from "./LoginView";
import { login, logout } from "./auth.slice";
import * as S from "./login.styles";
const LoginContainer = (props) => {
  const dispatch = useDispatch();
  let location = useLocation();
  let history = useHistory();
  const loginMessage = location?.state?.message;
  const redirectedFrom = location?.state?.from?.pathname;

  const handleLogin = (userName) => dispatch(login(userName));
  const handleLogOut = () => dispatch(logout());
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleRedirectAfterLogIn = (name) => {
    handleLogin(name);
    history.push(redirectedFrom);
  };

  return (
    <S.Container color="purple">
      {!isLoggedIn && loginMessage}
      <LoginView
        handleLogin={handleRedirectAfterLogIn}
        handleLogOut={handleLogOut}
        isLoggedIn={isLoggedIn}
      />
    </S.Container>
  );
};
export default LoginContainer;
