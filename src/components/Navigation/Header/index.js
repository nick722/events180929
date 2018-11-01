import React from "react";

import "./Header.css";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";

const Header = () => (
  <header className="Header">
    {/*<div>MENU</div>*/}
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Header;
