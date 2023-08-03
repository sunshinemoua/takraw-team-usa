import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex my-2 mx-6 items-center justify-between">
      <div className="p-1">
        <NavLink
          to="/"
          className={(isActive) => (isActive ? "active" : "navlink")}
        >
          <img src="./images/takraw-ball.jpeg" className="w-16"></img>
        </NavLink>
      </div>
      <div className="flex w-[60%] justify-between">
        <NavLink
          to="/about"
          className={(isActive) => (isActive ? "active" : "navlink")}
        >
          About the Team
        </NavLink>
        <NavLink
          to="/support"
          className={(isActive) => (isActive ? "active" : "navlink")}
        >
          Support
        </NavLink>
        <NavLink
          to="/team-usa-store"
          className={(isActive) => (isActive ? "active" : "navlink")}
        >
          TEAM USA Store
        </NavLink>
        <NavLink
          to="/contact-us"
          className={(isActive) => (isActive ? "active" : "navlink")}
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
