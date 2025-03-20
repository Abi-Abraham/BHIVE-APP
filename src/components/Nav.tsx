import React from "react";
import { NavWrapper } from "./Components.styles";
import Call from "../assets/svg/Call.svg";
import logo from "../assets/images/logo.png";

const Nav: React.FC = () => (
  <NavWrapper>
    <div className="logo">
      <img src={logo} alt="App Logo" />
    </div>
    <div className="call">
      <img src={Call} alt="App Logo" />
    </div>
  </NavWrapper>
);

export default Nav;
