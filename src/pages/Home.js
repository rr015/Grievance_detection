import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Explore from "../components/Explore";
import DisasterDetection from "../components/DisasterDetection";
import About from "../components/About";
import FloatingSensorGraph from "../components/FloatingSensorGraph";


const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Info />
      <Explore />
      <DisasterDetection />
      <FloatingSensorGraph />
      <About />
    </div>
    
  );
};

export default Home;