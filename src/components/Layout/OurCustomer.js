import React from "react";
import customerOne from "../Assets/images/customer/image-1.png";
import customerTwo from "../Assets/images/customer/image-2.png";
import customerThree from "../Assets/images/customer/image-3.png";
import customerFour from "../Assets/images/customer/image-4.png";

const OurCustomer = () => {
  return (
    <section className="our-customer">
      <div className="container">
        <h2 className="primary-Heading">
          <span>Our Customers</span>
        </h2>

        <div className="customer-images flex">
          <img src={customerOne} alt="UBS" />
          <img src={customerTwo} alt="HSBC" />
          <img src={customerThree} alt="Myfitlab" />
          <img src={customerFour} alt="Appsero" />
        </div>
      </div>
    </section>
  );
};

export default OurCustomer;
