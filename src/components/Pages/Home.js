import React, { Fragment } from "react";
import AboutUs from "../Layout/AboutUs";
import Header from "../Layout/Header";
import OurCustomer from "../Layout/OurCustomer";
import OurProducts from "../Layout/OurProducts";
import PricingPackage from "../Layout/PricingPackage";
import WhatWeDo from "../Layout/WhatWeDo";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <OurCustomer />
        <WhatWeDo />
        <OurProducts />
        <PricingPackage />
        <AboutUs />
      </main>
    </Fragment>
  );
};

export default Home;
