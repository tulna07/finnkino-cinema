import "./style.scss";
import Carousel from "@/containers/HomeTemplate/HomePage/Carousel";
import MovieList from "./MovieList";
import CinemaSystem from "./CinemaSystem";

function HomePage() {
  return (
    <div id="home-page">
      <Carousel />
      <MovieList />
      <CinemaSystem />
    </div>
  );
}

export default HomePage;
