import React from "react";
import Navbar from "../Components/Navbar";
import Skinmedica from "../Components/Skinmedica";
import Slider from "../Components/Slider";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Skinmedica/>
    </div>
  );
};

export default Home;
