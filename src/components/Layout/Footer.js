import React from "react";
import logo from "../Assets/images/logo.png";
import facebook from "../Assets/images/footer/facebook.png";
import whatsapp from "../Assets/images/footer/whatsapp.png";
import twitter from "../Assets/images/footer/twitter.png";
import instagram from "../Assets/images/footer/instagram.png";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-cta">
          <h2>
            Looking for a <br />
            Software Partner?
          </h2>
          <button class="btn btn-accent">Start A Project</button>
        </div>

        <div class="footer-section-main">
          <div class="footer-contact">
            <img class="footer-logo" src={logo} alt="Footer Logo" />

            <p class="footer-contact--des">
              Get a fully stacked design team that will <br />
              give you accessible design, exhaustive <br />
              research, and an outstanding experience.
            </p>

            <p class="footer-contact--email">Email: info@softcent.eu</p>

            <p class="footer-contact--phone">Phone: +(372) 57836500</p>

            <div class="footer-social">
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a href="#">
                {" "}
                <img src={twitter} alt="twitter" />{" "}
              </a>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>

          <div class="footer-company">
            <h3>Company</h3>

            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Our portfolio</a>
              </li>
              <li>
                <a href="#">Our Product</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Our Priceing</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div class="footer-service">
            <h3>Our Service</h3>

            <ul>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">UI/UX Design</a>
              </li>
              <li>
                <a href="#">Graphic Design (Branding)</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">New Products</a>
              </li>
            </ul>
          </div>

          <div class="footer-supports">
            <h3>Supports</h3>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Support Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Trams of Service</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="copyright">© 2022, Softcent EU, A European IT company</div>
      </div>
    </footer>
  );
};

export default Footer;
