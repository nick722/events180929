import React from "react";

import "./Layout.css";
import Aux from "../../hoc/Auxiliary";
import Header from "../Navigation/Header";

const Layout = ({ children }) => (
  <Aux>
    <Header />
    <main className="Content">{children}</main>
  </Aux>
);

export default Layout;
