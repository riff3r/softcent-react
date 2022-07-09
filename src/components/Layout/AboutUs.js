import React from "react";
import ellipse from "../Assets/images/about/ellipse.png";
import aboutbg from "../Assets/images/about/about-image.png";

const AboutUs = () => {
  return (
    <section class="about">
      <div class="container">
        <div class="">
          <h2 class="primary-Heading">
            <span>Talk About Us!</span>
          </h2>
        </div>

        <div class="grid grid--2-cols">
          <div class="testimonial">
            <p class="testimonial-text">
              We had a bit of a slow and bumpy start, but after changing the
              designer on their side everything went in a very good direction.
              The designers were talented and easy to work with.
            </p>

            <div class="testimonial-user">
              <img src={ellipse} alt="User" />
              <div class="testimonial-user--info">
                <h3>Shuvo Roy</h3>
                <p>Softcent Co-Founder</p>
              </div>

              <div class="testimonial-dot"></div>
            </div>
          </div>

          <div class="about-image">
            <img src={aboutbg} alt="About section bg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
