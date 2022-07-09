import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/Layout/Footer";
import Home from "./components/Pages/Home";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Fragment>
  );
}

export default App;
