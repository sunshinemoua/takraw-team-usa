import React from "react";
import BackgroundVideo from "../components/BackgroundVideo";

const Home = () => {
  return (
    <div>
      <BackgroundVideo />
      <div className="flex justify-center items-center h-screen">
        <div className="flex-column items-center lowercase font-bold text-2xl text-white tracking-wide">
          <p className="m-5">Celebrating global champs in Sepak Takraw...</p>
          <div className="flex w-inherit items-center justify-center uppercase font-bold text-6xl tracking-widest">
            TEAM USA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
