import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <nav className="p-4 bg-blue-100 text-sm flex gap-4">
        <Link to="/">
          <p>Home</p>
        </Link>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-700" : "")}
          to="/blog"
        >
          <p>Blog</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-700" : "")}
          to="/about"
        >
          <p>About</p>
        </NavLink>
      </nav>
      <Outlet />
    </main>
  );
};

export default HomePage;
