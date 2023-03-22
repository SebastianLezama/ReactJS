import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
