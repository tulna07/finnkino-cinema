import React from "react";

import "./HomePage.scss";
import images from "@/assets/images";
import Image from "@/components/Image";
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
