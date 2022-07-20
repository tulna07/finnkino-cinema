import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./MovieList.scss";
import { SET_MOVIE_TYPE_NOW, SET_MOVIE_TYPE_SOON } from "@/redux/constants/movieList";
import actGetMovieList from "@/redux/actions/movieList";
import MultipleItems from "@/components/ReactSlick/MultipleItems";
import Loader from "@/components/Loader";

function MovieList() {
  useEffect(() => {
    dispatch(actGetMovieList());
  }, []);
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList.data);
  const loading = useSelector((state) => state.movieList.loading);
  const movieType = useSelector((state) => state.movieList.movieType);

  let movieTypeList;

  const handleMovieType = () => {
    if (movieType === "now") {
      return (movieTypeList = movieList?.filter((movie) => movie.dangChieu));
    } else if (movieType === "soon") {
      return (movieTypeList = movieList?.filter((movie) => movie.sapChieu));
    }
  };

  return (
    <div className="home__movie-list">
      <Typography align="center" className="home-list__btn-list">
        <Button
          variant="text"
          className={movieType === "now" ? "home-list__btn active" : "home-list__btn"}
          onClick={() => dispatch({ type: SET_MOVIE_TYPE_NOW })}
        >
          Phim đang chiếu
        </Button>
        <Button
          variant="text"
          className={movieType === "soon" ? "home-list__btn active" : "home-list__btn"}
          onClick={() => dispatch({ type: SET_MOVIE_TYPE_SOON })}
        >
          Phim sắp chiếu
        </Button>
      </Typography>
      <Box className="movie-list__carousel-wrapper">
        <Container maxWidth="lg" sx={{ mx: "auto" }}>
          {loading ? (
            <Loader />
          ) : (
            <MultipleItems
              dots={false}
              autoplay={false}
              className="movie-list__carousel"
              data={handleMovieType()}
              Component="Image"
              slidesToShow={8.2}
              slidesToScroll={8}
              nextArrow={<FontAwesomeIcon icon={faAngleRight} />}
              prevArrow={<FontAwesomeIcon icon={faAngleLeft} />}
            />
          )}
          <Container maxWidth="lg" sx={{ mx: "auto" }}>
            <Button className="movie-list__carousel-btn">
              Show all
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                className="movie-list__carousel-btn-icon"
              />
            </Button>
          </Container>
        </Container>
      </Box>
    </div>
  );
}

export default MovieList;
