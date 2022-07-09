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
    <section className="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="secondary-Heading">
            <span>Our Portfolio</span>
          </h2>

          <div className="portfolio-button">
            <button>
              <img src={arrowLeft} alt="" />
            </button>
            <button className="portfolio-button-active">
              <img src={arrowright} alt="" />
            </button>
          </div>
        </div>

        <div className="portfolio-content">
          <div className="grid grid--3-cols">
            {portfolioItem?.map((item) => (
              <div key={item.id} className="portfolio-card">
                <img src={item.image} alt={item.title} />

                <h2>{item.title}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="btn">See All Protfolio</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
