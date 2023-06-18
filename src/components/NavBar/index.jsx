import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ link, name }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? "text-white" : "text-gray-800")}
    >
      <p>{name}</p>
    </NavLink>
  );
};

const NavBar = () => {
  return (
    <nav className=" py-2 px-4 absolute z-50 flex justify-center w-full">
      <div className="bg-gray-600 opacity-70 absolute w-full h-10 top-0 left-0 z-10"></div>
      <div className="flex gap-4 font-semibold z-50 relative">
        <NavItem
          link="/"
          name="Home"
        />
        <NavItem
          link="/projects"
          name="Projects"
        />
        <NavItem
          link="/contact"
          name="Contact"
        />
      </div>
    </nav>
  );
};

export default NavBar;
