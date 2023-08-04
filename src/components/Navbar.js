import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex px-6 items-center justify-between bg-red-800 h-24">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "w-20 px-2 m-2 transition-all ease-in-out order-solid border-white border-y-0 border-x  hover:scale-110"
            : "w-20 px-2 m-2 transition-all ease-in-out hover:border-white hover:border-x hover:scale-110"
        }
      >
        <img src="./images/takraw-ball-color.png"></img>
      </NavLink>

      <div className="flex w-[60%] justify-between items-center ">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "navlink")}
        >
          About the Team
        </NavLink>
        <NavLink
          to="/support"
          className={({ isActive }) => (isActive ? "active" : "navlink")}
        >
          Support
        </NavLink>
        <NavLink
          to="/team-usa-store"
          className={({ isActive }) => (isActive ? "active" : "navlink")}
        >
          TEAM USA Store
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) => (isActive ? "active" : "navlink")}
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
