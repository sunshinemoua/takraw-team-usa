import React from "react";
import Navbar from "../components/Navbar";
import { player1, players } from "../components/player-bio";
import Footer from "../components/Footer";

export const TeamCard = ({ direction }) => {
  const mappedPlayers = players.map((player) => {
    return (
      <div
        className={
          direction == "reverse"
            ? "flex flex-row-reverse justify-around m-4 p-6 "
            : "flex flex-row justify-around m-4 p-6"
        }
      >
        <img
          src="/images/team1.jpeg"
          alt="team photo"
          className=" w-96 rounded-md"
        />
        <div className="flex flex-col">
          <p>Position: {player.position} </p>
          <p>Number: {player.number} </p>
          <p> {player.bio} </p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="flex flex-col justify-center w-1/2">{mappedPlayers}</div>
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
      <TeamCard direction="row" />
      <TeamCard direction="reverse" />
      <TeamCard direction="row" /> <TeamCard direction="reverse" />
      <TeamCard direction="row" />
      {/* <Footer /> */}
    </div>
  );
};

export default About;
