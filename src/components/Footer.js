import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex-column bottom-0 w-full pt-8 pb-4 text-2xl text-white bg-red-800">
      <div className="flex justify-around items-center">
        <img
          className="w-12 h-12"
          src="./images/takraw-ball-color.png"
          alt="takraw-ball"
        ></img>
        <NavLink
          className="m-0 p-0 text-xs uppercase border-none tracking-widest"
          to="/latest-news"
        >
          Community
        </NavLink>
        <NavLink className="m-0 p-0 text-xs uppercase border-none tracking-widest">
          Local Partners
        </NavLink>
        <NavLink
          className="m-0 p-0 text-xs uppercase border-none tracking-widest"
          to="contact-us"
        >
          Contact Us
        </NavLink>
        <NavLink
          className="m-0 p-0 text-xs uppercase border-none tracking-widest"
          to="/support"
        >
          Sponsor Team Usa
        </NavLink>
      </div>

      <div className="flex justify-center items-center pt-6 text-xs">
        &copy; Copyright 2023 by Sunshine Moua. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
