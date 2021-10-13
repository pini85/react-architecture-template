import React from "react";
import * as S from "./login.styles";
const LogInView = ({ handleLogin, handleLogOut, isLoggedIn }) => {
  return (
    <S.Container>
      <h1>LOGIN</h1>
      {isLoggedIn ? (
        <button onClick={handleLogOut}>Logout</button>
      ) : (
        <button onClick={() => handleLogin("Pini")}>Login</button>
      )}
    </S.Container>
  );
};
export default LogInView;
