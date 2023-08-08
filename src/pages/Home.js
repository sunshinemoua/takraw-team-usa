import React from "react";
import { NavLink } from "react-router-dom";
import BackgroundVideo from "../components/BackgroundVideo";
import ArticleCard from "../components/ArticleCard";

export const Header = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-column items-center lowercase font-semibold text-2xl text-white tracking-wide">
        <p className="m-5">Celebrating global champs in Sepak Takraw...</p>
        <div className="flex m-6 w-inherit items-center justify-center uppercase font-bold text-6xl tracking-widest">
          TEAM USA
        </div>
        <div className="flex m-2 items-center justify-between">
          <NavLink to="/about" className="btn">
            Team Info
          </NavLink>
          <NavLink to="/latest-news" className="btn">
            Latest News
          </NavLink>
          <NavLink to="/team-usa-store" className="btn">
            Shop Official Merch
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export const TeamNews = () => {
  return (
    <div className="flex-column w-full h-1/2 p-6 bg-red-800">
      <div className="flex justify-center m-2 text-white text-3xl uppercase tracking-widest h-fit">
        Team News
      </div>
      <div className="flex m-4 justify-between items-center">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <BackgroundVideo />
      <Header />
      <TeamNews />
    </div>
  );
};

export default Home;
