//Material UI
import { Button, TableCell } from "@mui/material";

// Components
import Image from "@/components/Image";
import { EditMovieBtn, DeleteMovieBtn, CreateScheduleBtn } from "../../../components/Buttons";

//Others
import "./style.scss";

const MovieTableCells = (props) => {
  const { row, labelId, handleDeleteMovie, handleEditMovie, handleSchedule } = props;

  return (
    <>
      <TableCell
        component="th"
        id={labelId}
        scope="row"
        className="movie-table__table-cell table-cell__movie-id"
      >
        {row.maPhim}
      </TableCell>
      <TableCell
        sx={{ width: "200px", height: "100px" }}
        className="movie-table__table-cell table-cell__movie-img"
      >
        <Image src={row.hinhAnh} alt="movie image" />
      </TableCell>
      <TableCell
        align="left"
        sx={{ width: "200px", height: "100px" }}
        className="movie-table__table-cell table-cell__movie-name"
      >
        {row.tenPhim}
      </TableCell>
      <TableCell className="movie-table__table-cell table-cell__movie-desc">{row.moTa}</TableCell>
      <TableCell
        align="right"
        sx={{ width: "150px" }}
        className="movie-table__table-cell table-cell__movie-actions"
      >
        <DeleteMovieBtn onClick={() => handleDeleteMovie(row.maPhim)} />
        <EditMovieBtn onClick={() => handleEditMovie(row.maPhim)} />
        <CreateScheduleBtn onClick={() => handleSchedule(row.maPhim)} />
      </TableCell>
    </>
  );
};

export default MovieTableCells;
