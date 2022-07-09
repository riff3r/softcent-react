import React from "react";
import branding from "../Assets/images/what-we-do/branding.png";
import ui from "../Assets/images/what-we-do/ux.png";

const WhatWeDo = () => {
  return (
    <section class="what-we-do">
      <div class="container">
        <h2 class="secondary-Heading">
          <span>What We Do</span>
        </h2>

        <div class="grid grid--3-cols">
          <div class="wwd-service">
            <div class="wwd-header">
              <img src={branding} alt="Branding Icon" />
              <h3>Branding</h3>
            </div>

            <ul class="wwd-list">
              <li>Brand Strategy</li>
              <li>Social media</li>
              <li>Marketing Assets</li>
              <li>Presentations</li>
              <li>Build MVP Version</li>
              <li>Pitch Deck</li>
            </ul>
          </div>

          <div class="wwd-service">
            <div class="wwd-header">
              <img src={ui} alt="UI/UX Design" />
              <h3>UI/UX Design</h3>
            </div>

            <ul class="wwd-list">
              <li>User Interface</li>
              <li>User Experience</li>
              <li>Design System</li>
              <li>Wireframe</li>
              <li>Prototype</li>
              <li>Website & Mobile App</li>
              <li>IOS + Android</li>
            </ul>
          </div>

          <div class="wwd-service">
            <div class="wwd-header">
              <img src={ui} alt="Development" />
              <h3>Development</h3>
            </div>

            <ul class="wwd-list">
              <li>Front End (HTML, CSS, React)</li>
              <li>Backend (Node.js, MongoDB)</li>
              <li>iOS (Swift)</li>
              <li>Android (Kotlin, Flutter)</li>
              <li>Blockchain Development (NFT)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
