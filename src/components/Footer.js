import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex-column pt-8 pb-4 text-2xl text-white bg-red-800">
      <div className="flex justify-around items-center">
        <img
          className="w-16 h-16"
          src="./images/takraw-ball-color.png"
          alt="takraw-ball"
        ></img>
        <NavLink className="text-xs uppercase border-none" to="/latest-news">
          Community
        </NavLink>
        <NavLink className="text-xs uppercase border-none">
          Local Partners
        </NavLink>
        <NavLink className="text-xs uppercase border-none" to="contact-us">
          Contact Us
        </NavLink>
        <NavLink className="text-xs uppercase border-none" to="/support">
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
