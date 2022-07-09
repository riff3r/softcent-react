import React from "react";
import arrowLeft from "../Assets/images/portfolio/arrow-left.png";
import arrowright from "../Assets/images/portfolio/arrow-right.png";
import itemOne from "../Assets/images/portfolio/item-1.png";
import itemTwo from "../Assets/images/portfolio/item-2.png";
import itemThree from "../Assets/images/portfolio/item-3.png";

const portfolioItem = [
  {
    id: 1,
    title: "Color System Design",
    image: itemOne,
  },
  {
    id: 2,
    title: "Logo Design",
    image: itemTwo,
  },
  {
    id: 3,
    title: "UI/UX Design",
    image: itemThree,
  },
];

const Portfolio = () => {
  return (
    <section class="portfolio">
      <div class="container">
        <div class="portfolio-header">
          <h2 class="secondary-Heading">
            <span>Our Portfolio</span>
          </h2>

          <div class="portfolio-button">
            <button>
              <img src={arrowLeft} alt="" />
            </button>
            <button class="portfolio-button-active">
              <img src={arrowright} alt="" />
            </button>
          </div>
        </div>

        <div class="portfolio-content">
          <div class="grid grid--3-cols">
            {portfolioItem?.map((item) => (
              <div class="portfolio-card">
                <img src={item.image} alt={item.title} />

                <h2>{item.title}</h2>
              </div>
            ))}
          </div>
        </div>

        <div class="text-center">
          <button class="btn">See All Protfolio</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
