import React from "react";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";
import BackgroundVideo from "../components/BackgroundVideo";

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

export const Card = ({ src, title, className }) => {
  return (
    <div
      className={
        className === "article"
          ? "flex-column h-96 w-3/4 m-4 rounded-lg bg-gray-300 transition-all ease-in-out hover:scale-105"
          : "flex-column w-1/3 m-4 rounded-lg bg-gray-400 shadow-lg transition-all ease-in-out hover:scale-105"
      }
    >
      <img
        src={src}
        alt="takraw-player"
        className={
          className === "article"
            ? "w-full h-3/4 rounded-t-lg "
            : "w-full h-5/6 rounded-t-lg"
        }
      />
      <div className="flex justify-center m-4 font-semibold text-gray-700 uppercase">
        {title}
      </div>
      <div className="flex justify-end ">
        <NavLink to="/latest-news" className="article-btns">
          Read More
        </NavLink>
      </div>
    </div>
  );
};

export const UpcomingEvents = () => {
  return (
    <div className="flex justify-around m-10">
      <Card src="./images/takraw1.jpeg" title="Upcoming Event" />
      <Card src="./images/takraw2.jpeg" title="Upcoming Event" />
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
        <Card className="article" src="./images/takraw1.jpeg" title="title 1" />
        <Card className="article" src="./images/takraw2.jpeg" title="title 2" />
        <Card className="article" src="./images/takraw3.jpeg" title="title 3" />
      </div>
    </div>
  );
};

export const TeamVideos = () => {
  return (
    <div className="flex-column w-full p-6 bg-red-800">
      <div className="flex justify-center m-3 text-white text-3xl uppercase tracking-widest h-fit">
        Recent Team Videos
      </div>
      <div className="flex m-8 justify-evenly items-center">
        <ReactPlayer url="https://www.youtube.com/watch?v=LpyXu9qheVA" />
        <ReactPlayer url="https://www.youtube.com/watch?v=Jx5pxhIoFNo" />
      </div>
    </div>
  );
};

export const Sponsors = () => {
  return (
    <div className="flex-column">
      <div className="flex items-center justify-center m-12 uppercase font-semibold text-3xl tracking-widest">
        Proud Sponsors
      </div>
      <div className="flex items-center justify-between m-4">
        <img src="/images/sample-logo1.jpeg" />
        <img src="/images/sample-logo2.png" />
        <img src="/images/sample-logo3.png" />
        <img src="/images/sample-logo1.jpeg" />
        <img src="/images/sample-logo2.png" />
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
      <UpcomingEvents />
      <TeamVideos />
      <Sponsors />
    </div>
  );
};

export default Home;
