import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      {/* <img
        src="/images/field5.jpeg"
        alt="team photo"
        className=" w-full h-72 object-cover "
      /> */}
      <div className="flex justify-center items-center h-64 bg-gradient-to-t from-red-500 to-red-800 text-3xl text-white uppercase tracking-widest ">
        The Roster
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default About;
