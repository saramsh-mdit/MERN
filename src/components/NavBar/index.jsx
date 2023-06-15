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
    <nav className="bg-gray-200">
      <div className="flex gap-4">
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
