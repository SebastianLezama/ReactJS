import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

// https://waouznfjhihauptkfimb.supabase.co/storage/v1/object/sign/Images/kanagawa_1080.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMva2FuYWdhd2FfMTA4MC5qcGciLCJpYXQiOjE2ODUxMTIxOTgsImV4cCI6MTY4NzcwNDE5OH0.M7HjerJ6jZMrlvI7Lp2CeaObg1KLAOfSTFNypZV4sG0&t=2023-05-26T14%3A43%3A17.703Z

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
