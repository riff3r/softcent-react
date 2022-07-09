import React, { useState } from "react";
import Hero from "./Hero";

import MainNav from "./MainNav";
import Video from "./Video";

const Header = () => {
  return (
    <header class="header">
      <div class="container">
        <MainNav />
        <Hero />
        <Video />
      </div>
    </header>
  );
};

export default Header;
