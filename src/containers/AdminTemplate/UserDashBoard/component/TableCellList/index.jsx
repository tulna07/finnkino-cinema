import { TableCell } from "@mui/material";

// Components
import { EditMovieBtn, DeleteMovieBtn } from "../../../components/Buttons";

//Others
import "./style.scss";

const UserTableCells = (props) => {
  const { row, index, labelId, handleDeleteMovie, handleEditMovie } = props;
  return (
    <>
      <TableCell
        component="th"
        id={labelId}
        scope="row"
        className="management-table__table-cell table-cell__user-number"
      >
        {index}
      </TableCell>
      <TableCell
        sx={{ width: "200px", height: "100px" }}
        className="management-table__table-cell table-cell__user-account"
      >
        {row.taiKhoan}
      </TableCell>
      <TableCell
        align="left"
        sx={{ width: "200px", height: "100px" }}
        className="management-table__table-cell table-cell__user-password"
      >
        {row.matKhau}
      </TableCell>
      <TableCell className="management-table__table-cell table-cell__user-email">
        {row.email}
      </TableCell>
      <TableCell className="management-table__table-cell table-cell__user-phoneNo">
        {row.soDT}
      </TableCell>
      <TableCell
        align="right"
        sx={{ width: "150px" }}
        className="management-table__table-cell table-cell__management-actions"
      >
        <DeleteMovieBtn onClick={() => handleDeleteMovie(row.taiKhoan)} />
        <EditMovieBtn onClick={() => handleEditMovie(row.taiKhoan)} />
      </TableCell>
    </>
  );
};

export default UserTableCells;
