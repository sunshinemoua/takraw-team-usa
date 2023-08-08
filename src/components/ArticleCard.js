import React from "react";
import { NavLink } from "react-router-dom";

const ArticleCard = () => {
  return (
    <div className="flex-column h-96 w-3/4 m-4 rounded-lg bg-gray-300">
      <img
        src="./images/takraw1.jpeg"
        alt="takraw-player"
        className="w-full h-3/4 rounded-t-lg"
      />
      <div className="flex justify-center m-4 font-semibold text-gray-700 uppercase">
        test test sample
      </div>
      <div className="flex justify-end ">
        <NavLink className="article-btns">Read More</NavLink>
      </div>
    </div>
  );
};

export default ArticleCard;
