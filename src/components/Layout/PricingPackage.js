import React from "react";

const PricingPackage = () => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-header">
          <div className="primary-Heading">
            <h2>Pricing Package Choose Your Plan</h2>
          </div>

          <p>
            We believe that great design should not be out of reach, so our
            services <br />
            are less than half the price of a full-time designer.
          </p>

          <div>
            <button className="btn btn-accent">Monthly</button>
            <button className="btn">Yearly</button>
          </div>
        </div>

        <div className="pricing-cards">
          <div className="grid grid--3-cols">
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h2>Merketing</h2>
                <h3>$899/ mo</h3>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-service">
                  <li>Dedicated Designer</li>
                  <li>Unlimited requests</li>
                  <li>Unlimited brand profiles</li>
                  <li>Native source files</li>
                  <li>Real-time collaboration</li>
                  <li>Banner Ads</li>
                  <li>Clothing & Merchandise Design</li>
                  <li>Packaging & Label</li>
                  <li>Logo & Brand Guide</li>
                </ul>
              </div>

              <div className="pricing-submit">
                <button className="pricing-button">$899 / mo</button>
              </div>
            </div>

            <div className="pricing-card focused">
              <div className="pricing-card-header">
                <h2>UI/UX Design</h2>
                <h3>$1000/ mo</h3>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-service">
                  <li>Dedicated Designer</li>
                  <li>Unlimited requests</li>
                  <li>Unlimited brand profiles</li>
                  <li>Native source files</li>
                  <li>Real-time collaboration</li>
                  <li>Banner Ads</li>
                  <li>Clothing & Merchandise Design</li>
                  <li>Packaging & Label</li>
                  <li>Logo & Brand Guide</li>
                </ul>
              </div>

              <div className="pricing-submit">
                <button className="pricing-button">$899 / mo</button>
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-card-header">
                <h2>Development</h2>
                <h3>$1000/ mo</h3>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-service">
                  <li>Dedicated Designer</li>
                  <li>Unlimited requests</li>
                  <li>Unlimited brand profiles</li>
                  <li>Native source files</li>
                  <li>Real-time collaboration</li>
                  <li>Banner Ads</li>
                  <li>Clothing & Merchandise Design</li>
                  <li>Packaging & Label</li>
                  <li>Logo & Brand Guide</li>
                </ul>
              </div>

              <div className="pricing-submit">
                <button className="pricing-button">$899 / mo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackage;
