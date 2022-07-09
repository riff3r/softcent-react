import React from "react";
import cashback from "../Assets/images/products/cashback.png";
import swipe from "../Assets/images/products/swipe.png";

const OurProducts = () => {
  return (
    <section className="products">
      <div className="products-header container">
        <h2 className="secondary-Heading">
          <span>Our Products</span>
        </h2>

        <div className="products-header-text">
          <p>
            We believe that great design should not be out of reach, so our
            services <br />
            are less than half the price of a full-time designer.
          </p>

          <button className="btn">See More</button>
        </div>
      </div>

      <div className="product-content">
        <div className="product-swipe">
          <div className="swipe-text product-content--text">
            <h3>SwipeXYZ Product</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="btn btn-accent">View product</button>
          </div>
          <div className="product-content--image">
            <img src={swipe} alt="" />
          </div>
        </div>

        <div className="product-cashback">
          <div className="product-content--image">
            <img src={cashback} alt="Cashback Product" />
          </div>

          <div className="product-content--text">
            <h3>Cashback Product</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="btn btn-accent">View product</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
