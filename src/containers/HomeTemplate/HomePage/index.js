import { useSelector } from "react-redux";

import "./HomePage.scss";
import Carousel from "@/containers/HomeTemplate/HomePage/Carousel";
import MovieList from "./MovieList";
import CinemaSystem from "./CinemaSystem";

function HomePage() {
  const cinemaSystemData = useSelector((state) => state.cinemaSystem.data);
  return (
    <div id="home-page">
      <Carousel />
      <MovieList />
      <CinemaSystem cinemaSystemData={cinemaSystemData} />
    </div>
  );
}

export default HomePage;
