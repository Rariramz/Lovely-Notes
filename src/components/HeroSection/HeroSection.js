import React from "react";
import "./HeroSection.css";
import myVideo from "../../videos/video-cold-blue.mp4";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={myVideo} type="video/mp4" autoPlay loop muted />
      <div className="impulse">
        <h1>Your life is in your hands</h1>
        <p>What are you waiting for?</p>
        <button className="hero-button" onClick={() => alert("CLICK SCROLL")}>
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
