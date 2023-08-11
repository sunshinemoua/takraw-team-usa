import React from "react";
import Navbar from "../components/Navbar";
import { player1, player2 } from "../components/player-bio";
import Footer from "../components/Footer";

export const TeamCard = ({ direction }) => {
  return (
    <div
      className={
        direction == "reverse"
          ? "flex flex-row-reverse justify-around m-4 p-6 "
          : "flex flex-row justify-around m-4 p-6"
      }
    >
      <div>
        <img
          src="/images/team1.jpeg"
          alt="team photo"
          className=" w-96 rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center w-1/2">
        <p className="p-2">Position: Forward</p>
        <p className="p-2">Number: 12</p>
        <p className="p-2">{player1}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center h-64 bg-gradient-to-t from-red-500 to-red-800 text-3xl text-white uppercase tracking-widest ">
        The Roster
      </div>

      <TeamCard direction="reverse" />

      {/* <Footer /> */}
    </div>
  );
};

export default About;
