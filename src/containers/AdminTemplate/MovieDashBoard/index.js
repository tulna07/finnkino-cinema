import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Material UI
import { Container } from "@mui/system";
import { Button } from "@mui/material";

//Components
import SearchBar from "../components/SearchBar";
import MovieManagementTable from "./MovieManagementTable";
import AddMovieModal from "./AddMovie";
import MovieModal from "./components/MovieModal";

import actGetMovieList from "@/redux/actions/movieList";

function MovieDashBoard() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList.data);
  const movieListLoading = useSelector((state) => state.movieList.loading);

  useEffect(() => {
    dispatch(actGetMovieList());
  }, []);

  const AddMovieBtn = (props) => (
    <Button
      variant="contained"
      sx={{
        m: "5px 0 20px 0",
        backgroundColor: "var(--primary)",
        color: "var(--white)",
        "&:hover": {
          backgroundColor: "#caa100;",
        },
      }}
      {...props}
    >
      Thêm phim
    </Button>
  );

  return (
    <Container>
      <SearchBar />
      <MovieModal ModalButton={AddMovieBtn} />
      <MovieManagementTable movieList={movieList} loading={movieListLoading} />
    </Container>
  );
}

export default MovieDashBoard;
