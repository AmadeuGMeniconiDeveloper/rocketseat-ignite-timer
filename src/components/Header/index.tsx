import { NavLink } from "react-router-dom";

import { HeaderContainer } from "./styled";

import { Scroll, Timer } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
