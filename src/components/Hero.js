import React from "react";
import "./styles/Hero.css";
import heroImage from "../assets/istockphoto-1077531894-612x612.jpg"; // Adjust the path to your image

const Hero = () => {
  return (
    <section className="hero">
      <div className="carousel">
        <img src={heroImage} alt="Rhino in Assam" />
        <div className="carousel-controls">
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;