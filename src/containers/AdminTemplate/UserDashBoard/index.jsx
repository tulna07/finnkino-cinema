import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Material UI
import { Container } from "@mui/system";
import { Button, Modal } from "@mui/material";

//Components
import SearchBar from "../components/SearchBar";

//Others
import { actGetUserSearch, actGetUserList } from "@/redux/actions/userManagement";
import MuiEnhancedTable from "../components/MuiEnhancedTable";
import UserTableCells from "./component/TableCellList";
import headCells from "./constants";
import { AddItemBtn } from "../components/Buttons";
import UserModal from "./component/UserModal";

function UserDashBoard() {
  const [openModalUser, setOpenModalUser] = React.useState(false);

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList.userList);
  const movieListLoading = useSelector((state) => state.movieList.loading);

  useEffect(() => {
    dispatch(actGetUserList());
  }, []);

  const handleSearch = (value) => {
    dispatch(actGetUserSearch(value));
  };
  return (
    <>
      <Container
        sx={{
          overflow: "hidden",
        }}
      >
        <SearchBar onSubmit={handleSearch} className="movie-dashboard__search" />
        <AddItemBtn onClick={() => setOpenModalUser(true)}>Thêm người dùng</AddItemBtn>
        <MuiEnhancedTable
          headCells={headCells}
          dataList={userList}
          TableCellList={UserTableCells}
          tableType="user"
        />
      </Container>
      <UserModal
        openModalUser={openModalUser}
        setOpenModalUser={setOpenModalUser}
        title="Thêm người dùng"
        button="Thêm người dùng"
        modalType="addUser"
      />
    </>
  );
}

export default UserDashBoard;
