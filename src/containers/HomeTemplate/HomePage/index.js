import React from "react";

import "./HomePage.scss";
import Carousel from "@/containers/HomeTemplate/HomePage/Carousel";
import MovieList from "./MovieList";

function HomePage() {
  return (
    <div id="home-page">
      <Carousel />
      <MovieList />
    </div>
  );
}

export default HomePage;
