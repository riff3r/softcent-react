import React, { useState } from "react";
import logo from "../Assets/images/logo.png";

const MainNav = () => {
  const [navStatus, setnavStatus] = useState(false);

  return (
    <div className="main-nav">
      <div className="logo">
        <img src={logo} alt="Softcent Logo" />
      </div>

      <button
        className="mobile-nav-toggle"
        aria-controls="nav-bar"
        aria-expanded="false"
        onClick={() => setnavStatus(!navStatus)}
      >
        <span className="sr-only">
          {!navStatus ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </span>
      </button>

      <nav id="nav-bar" className="nav-bar" data-visible={navStatus}>
        <a className="nav-list" href="#">
          Home
        </a>
        <a className="nav-list" href="#">
          About
        </a>
        <a className="nav-list" href="#">
          Work
        </a>
        <a className="nav-list" href="#">
          premium products
        </a>
        <a className="nav-list" href="#">
          Blog
        </a>
        <a className="btn btn-cta nav-list" href="#">
          Start a project
        </a>
      </nav>
    </div>
  );
};

export default MainNav;
