import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Material UI
import { Container } from "@mui/system";
import { Button } from "@mui/material";

//Components
import SearchBar from "../components/SearchBar";
// import MovieManagementTable from "./MovieManagementTable";
// import MovieModal from "./components/MovieModal";

//Others
import actGetUserList from "@/redux/actions/userList";
import MuiEnhancedTable from "../components/MuiEnhancedTable";
import UserTableCells from "./component/TableCellList";
import headCells from "./constants";
import { AddItemBtn } from "../components/Buttons";

function UserDashBoard() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList.data);
  const movieListLoading = useSelector((state) => state.movieList.loading);

  useEffect(() => {
    dispatch(actGetUserList());
  }, []);

  console.log(userList);

  const movieList1 = useSelector((state) => state.movieList.data);

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

  const handleSearch = (value) => {
    dispatch(actGetUserList(value));
  };
  return (
    <>
      <Container
        sx={{
          overflow: "hidden",
        }}
      >
        <SearchBar onSubmit={handleSearch} className="movie-dashboard__search" />
        <AddItemBtn>Thêm người dùng</AddItemBtn>
        <MuiEnhancedTable
          headCells={headCells}
          dataList={userList}
          TableCellList={UserTableCells}
        />
      </Container>
      {/* <MovieModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title="Thêm phim mới"
        button="Thêm phim"
        modalType="addMovie"
      /> */}
    </>
  );
}

export default UserDashBoard;
