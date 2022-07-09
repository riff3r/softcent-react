import React from "react";
import figma from "../Assets/images/design-tech/image-5.png";
import inDesign from "../Assets/images/design-tech/image-6.png";
import xd from "../Assets/images/design-tech/image-7.png";
import ps from "../Assets/images/design-tech/image-8.png";
import ai from "../Assets/images/design-tech/image-9.png";

const DesignTechnology = () => {
  return (
    <section className="technology-design">
      <div className="design-header">
        <h2 className="primary-Heading">
          <span>Our Design Technology</span>
        </h2>
      </div>

      <div className="design-content">
        <div className="container">
          <div className="design-lists">
            <ul>
              <li>
                <img src={figma} alt="" />
              </li>
              <li>
                <img src={inDesign} alt="" />
              </li>
              <li>
                <img src={xd} alt="" />
              </li>
              <li>
                <img src={ps} alt="" />
              </li>
              <li>
                <img src={ai} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignTechnology;
