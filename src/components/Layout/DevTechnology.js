import React from "react";
import php from "../Assets/images/dev-tech/image-5.png";
import js from "../Assets/images/dev-tech/image-6.png";
import html from "../Assets/images/dev-tech/image-7.png";
import css from "../Assets/images/dev-tech/image-8.png";
import box from "../Assets/images/dev-tech/image-9.png";

const DevTechnology = () => {
  return (
    <section class="technology-dev">
      <div class="container">
        <div class="dev-header">
          <h2 class="primary-Heading">
            <span>Our Dev Technology</span>
          </h2>
        </div>

        <div class="dev-content">
          <div class="dev-language">
            <ul>
              <li>
                <a class="active" href="#">
                  Programming Languages
                </a>
              </li>
              <li>
                <a href="#">Frameworks</a>
              </li>
              <li>
                <a href="#">Databases</a>
              </li>
              <li>
                <a href="#">Mobile Platforms</a>
              </li>
            </ul>
          </div>

          <div class="dev-lists">
            <ul>
              <li>
                <img src={php} alt="" />
              </li>
              <li>
                <img src={js} alt="" />
              </li>
              <li>
                <img src={html} alt="" />
              </li>
              <li>
                <img src={css} alt="" />
              </li>
              <li>
                <img src={box} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevTechnology;
