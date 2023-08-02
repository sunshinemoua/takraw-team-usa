import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <NavLink
        to="/"
        className={(isActive) => (isActive ? "active" : "navlink")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={(isActive) => (isActive ? "active" : "navlink")}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={(isActive) => (isActive ? "active" : "navlink")}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
