import React from "react";
import { Link } from "react-router-dom";
import * as S from "./navbar.styles";
import * as route from "routes/constants";

const NavBar = () => {
  console.log(route.DASHBOARD);
  return (
    <S.Nav>
      <S.Ul>
        <Link to={route.LOGIN}>LogIn</Link>

        <Link to={route.DASHBOARD}>DashBoard</Link>
      </S.Ul>
    </S.Nav>
  );
};
export default NavBar;
