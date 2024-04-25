import { BrowserRouter as BrowserRouter, Link } from "react-router-dom";
import React from "react";
import NavbarHeader from "./navbar";

const Layout = ({ children }) => {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavbarHeader />
          <div>{children}</div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
