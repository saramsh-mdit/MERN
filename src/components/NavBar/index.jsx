import React from "react";

import style from "./style.module.scss";

const navElementList = [
  { link: "/home", name: "Home" },
  { link: "https://facebook.com", name: "Facebook" },
  { link: "https://google.com", name: "Google" },
  { link: "https://linkedin.com", name: "LinkedIN" },
];

const NavElement = ({ link, name }) => {
  return (
    <a href={link} className={style.navElement}>
      {name}
    </a>
  );
};

const NavBar = ({ setDarkmode, darkmode }) => {
  const darkModeHandler = (e) => {
    setDarkmode(!darkmode);
  };
  return (
    <div className={`${style.navBar} ${darkmode ? style.dark : ""}`}>
      {navElementList.map((item, index) => {
        return <NavElement key={item.name + index} {...item} />;
      })}

      <label htmlFor="darkmode">Darkmode</label>
      <input
        type="checkbox"
        name="darkmode"
        id="darkmode"
        onChange={darkModeHandler}
      />
    </div>
  );
};

export default NavBar;
