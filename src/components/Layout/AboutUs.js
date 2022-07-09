import React from "react";
import ellipse from "../Assets/images/about/ellipse.png";
import aboutbg from "../Assets/images/about/about-image.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  const users = [
    {
      id: 1,
      name: "Shuvo Roy",
      designation: "Softcent Co-Founder",
      description:
        "We had a bit of a slow and bumpy start, but after changing the designer on their side everything went in a very good direction. The designers were talented and easy to work with. Good Luck",
      image: ellipse,
    },

    {
      id: 2,
      name: "Ruhul Amin",
      designation: "Frontend Developer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
      image: ellipse,
    },

    {
      id: 3,
      name: "Imran Hossain",
      designation: "Senior Web Developer",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
      image: ellipse,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <section className="about">
      <div className="container">
        <div className="">
          <h2 className="primary-Heading">
            <span>Talk About Us!</span>
          </h2>
        </div>

        <div className="grid grid--2-cols">
          <Slider {...settings}>
            {users.map((user) => (
              <div key={user.id} className="testimonial">
                <p className="testimonial-text">{user.description}</p>

                <div className="testimonial-user">
                  <img src={user.image} alt="User" />
                  <div className="testimonial-user--info">
                    <h3>{user.name}</h3>
                    <p>{user.designation}</p>
                  </div>

                  <div className="testimonial-dot"></div>
                </div>
              </div>
            ))}
          </Slider>

          <div className="about-image">
            <img src={aboutbg} alt="About section bg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
