import React from "react";

import "./HomePage.scss";
import Carousel from "@/containers/HomeTemplate/HomePage/Carousel";

function HomePage() {
  return (
    <div id="home-page">
      <div className="home__carousel">
        <Carousel />
      </div>
    </div>
  );
}

export default HomePage;
