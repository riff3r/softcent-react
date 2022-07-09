import Slider from "react-slick";
import customerOne from "../Assets/images/customer/image-1.png";
import customerTwo from "../Assets/images/customer/image-2.png";
import customerThree from "../Assets/images/customer/image-3.png";
import customerFour from "../Assets/images/customer/image-4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurCustomer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="our-customer">
      <div className="container">
        <h2 className="primary-Heading">
          <span>Our Customers</span>
        </h2>

        <Slider {...settings}>
          <div>
            <h3>
              <img src={customerOne} alt="UBS" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={customerTwo} alt="HSBC" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={customerThree} alt="Myfitlab" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={customerFour} alt="Appsero" />
            </h3>
          </div>

          <div>
            <h3>
              <img src={customerTwo} alt="HSBC" />
            </h3>
          </div>

          <div>
            <h3>
              <img src={customerThree} alt="Myfitlab" />
            </h3>
          </div>

          <div>
            <h3>
              <img src={customerOne} alt="UBS" />
            </h3>
          </div>

          <div>
            <h3>
              <img src={customerFour} alt="Appsero" />
            </h3>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default OurCustomer;
