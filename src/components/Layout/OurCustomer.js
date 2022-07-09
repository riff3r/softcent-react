import Slider from "react-slick";
import customerOne from "../Assets/images/customer/image-1.png";
import customerTwo from "../Assets/images/customer/image-2.png";
import customerThree from "../Assets/images/customer/image-3.png";
import customerFour from "../Assets/images/customer/image-4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurCustomer = () => {
  const customers = [
    {
      id: 1,
      name: "UBS",
      image: customerOne,
    },
    {
      id: 2,
      name: "HSBC",
      image: customerTwo,
    },
    {
      id: 3,
      name: "Myfitlab",
      image: customerThree,
    },
    {
      id: 4,
      name: "Appsero",
      image: customerFour,
    },
    {
      id: 5,
      name: "UBS",
      image: customerOne,
    },
    {
      id: 6,
      name: "HSBC",
      image: customerTwo,
    },
    {
      id: 7,
      name: "Myfitlab",
      image: customerThree,
    },
    {
      id: 8,
      name: "Appsero",
      image: customerFour,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          {customers.map((customer) => (
            <div key={customer.id}>
              <h3>
                <img src={customer.image} alt={customer.name} />
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurCustomer;
