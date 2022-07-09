import React, { Fragment } from "react";
import AboutUs from "../Layout/AboutUs";
import Header from "../Layout/Header";
import OurCustomer from "../Layout/OurCustomer";
import OurProducts from "../Layout/OurProducts";
import Portfolio from "../Layout/Portfolio";
import PricingPackage from "../Layout/PricingPackage";
import WhatWeDo from "../Layout/WhatWeDo";
import DevTechnology from "../Layout/DevTechnology";
import DesignTechnology from "../Layout/DesignTechnology";
import Workflow from "../Layout/Workflow";

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
        <Portfolio />
        <DevTechnology />
        <DesignTechnology />
        <Workflow />
      </main>
    </Fragment>
  );
};

export default Home;
