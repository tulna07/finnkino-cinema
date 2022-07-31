import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Material UI
import { Container } from "@mui/system";
import { Button } from "@mui/material";

//Components
import SearchBar from "../components/SearchBar";
import MovieManagementTable from "./MovieManagementTable";
import MovieModal from "./components/MovieModal";
import MuiEnhancedTable from "../components/MuiEnhancedTable";
import MovieTableCells from "./components/TableCellList";
import { AddItemBtn } from "../components/Buttons";

//Others
import actGetMovieList from "@/redux/actions/movieList";
import { headCells } from "./constants";
import "./style.scss";

function MovieDashBoard() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList.data);
  const movieListLoading = useSelector((state) => state.movieList.loading);

  useEffect(() => {
    dispatch(actGetMovieList());
  }, []);

  const handleSearch = (value) => {
    dispatch(actGetMovieList(value));
  };
  return (
    <>
      <Container
        sx={{
          overflow: "hidden",
        }}
      >
        <SearchBar onSubmit={handleSearch} className="movie-dashboard__search" />
        <AddItemBtn onClick={() => setOpenModal(true)}>Thêm phim</AddItemBtn>
        <MuiEnhancedTable
          headCells={headCells}
          dataList={movieList}
          TableCellList={MovieTableCells}
          tableType="movie"
        />
      </Container>
      <MovieModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title="Thêm phim mới"
        button="Thêm phim"
        modalType="addMovie"
      />
    </>
  );
}

export default MovieDashBoard;
