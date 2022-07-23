import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";

import SearchBar from "../_components/SearchBar";
import MovieManagementTable from "./MovieManagementTable";
import actGetMovieList from "@/redux/actions/movieList";
import AddMovieModal from "./MovieManagementTable/AddMovie";

function MovieDashBoard() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList.data);
  const movieListLoading = useSelector((state) => state.movieList.loading);

  useEffect(() => {
    dispatch(actGetMovieList());
  }, []);
  return (
    <Container>
      <SearchBar />
      <AddMovieModal />
      <MovieManagementTable movieList={movieList} loading={movieListLoading} />
    </Container>
  );
}

export default MovieDashBoard;
