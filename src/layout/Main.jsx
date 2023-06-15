import React from "react";
import NavBar from "./../components/NavBar/index";

const MainWrapper = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>;
    </>
  );
};

export default MainWrapper;
