import React from "react";
import ellipse from "../Assets/images/about/ellipse.png";
import aboutbg from "../Assets/images/about/about-image.png";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="">
          <h2 className="primary-Heading">
            <span>Talk About Us!</span>
          </h2>
        </div>

        <div className="grid grid--2-cols">
          <div className="testimonial">
            <p className="testimonial-text">
              We had a bit of a slow and bumpy start, but after changing the
              designer on their side everything went in a very good direction.
              The designers were talented and easy to work with.
            </p>

            <div className="testimonial-user">
              <img src={ellipse} alt="User" />
              <div className="testimonial-user--info">
                <h3>Shuvo Roy</h3>
                <p>Softcent Co-Founder</p>
              </div>

              <div className="testimonial-dot"></div>
            </div>
          </div>

          <div className="about-image">
            <img src={aboutbg} alt="About section bg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
