import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Material UI
import { Container } from "@mui/system";

//Components
import SearchBar from "../components/SearchBar";
import { AddItemBtn } from "../components/Buttons";
import MuiEnhancedTable from "../components/MuiEnhancedTable";
import UserTableCells from "./component/TableCellList";
import headCells from "./constants";
import UserModal from "./component/UserModal";

//Others
import actGetUserList from "@/store/actions/userList";
import { actUserDetailsSuccess } from "@/store/actions/userDetails";

function UserDashBoard() {
  const [openModalUser, setOpenModalUser] = useState(false);

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList.data);
  const updateUser = useSelector((state) => state.userDetails.data);
  const userListLoading = useSelector((state) => state.userList.loading);

  useEffect(() => {
    dispatch(actGetUserList());
  }, [updateUser]);

  const handleSearch = (value) => {
    dispatch(actGetUserList(value));
    dispatch(actUserDetailsSuccess(userList));
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
          loading={userListLoading}
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
