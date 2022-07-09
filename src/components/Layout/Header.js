import Hero from "./Hero";

import MainNav from "./MainNav";
import Video from "./Video";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <MainNav />
        <Hero />
        <Video />
      </div>
    </header>
  );
};

export default Header;
