import React from "react";
import tack from "../Assets/images/tic-tack-bg.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1 className="hero-headline">
          <span className="hero-underline">Software</span> services for <br />
          startups without
          <br />
          limits..
        </h1>

        <p>
          We believe that great design should not be out of reach, so our
          services <br />
          are less than half the price of a full-time designer.
        </p>
      </div>

      <div className="hero-bg">
        <img src={tack} alt="Hero section Background" />
      </div>
    </section>
  );
};

export default Hero;
