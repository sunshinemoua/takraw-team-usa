import React from "react";
import Navbar from "../components/Navbar";
import { player1, players } from "../components/player-bio";
import Footer from "../components/Footer";

export const TeamCard = () => {
  const mappedPlayers = players.map((player) => {
    console.log(player);
    return (
      <div className="flex flex-col w-full m-6" key={player.number}>
        <img src="/images/team1.jpeg" alt="team photo" className="rounded-md" />
        <ul>
          <li>Position: {player.position} </li>
          <li>Number: {player.number} </li>
          <li> {player.bio} </li>
        </ul>
      </div>
    );
  });

  return (
    <div className="flex flex-row w-1/3 flex-wrap justify-around">
      {mappedPlayers}
    </div>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-64 bg-gradient-to-t from-red-500 to-red-800 text-3xl text-white uppercase tracking-widest ">
        The Roster
      </div>
      <TeamCard />
      {/* <Footer /> */}
    </>
  );
};

export default About;
