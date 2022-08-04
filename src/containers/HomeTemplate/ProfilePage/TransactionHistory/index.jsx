import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

// Material UI
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage } from "@mui/icons-material";

// Format date
import moment from "moment";

// Constants
import { ALPHABET } from "@/constants";

// Scss
import "./style.scss";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPage /> : <LastPage />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const columns = [
  { id: "ticket-id", label: "Mã vé", align: "center", minWidth: 80 },
  { id: "movie-name", label: "Tên phim", align: "center", minWidth: 100 },
  { id: "showtime", label: "Ngày chiếu", align: "center", minWidth: 170 },
  { id: "movie-duration", label: "Thời lượng", align: "center", minWidth: 120 },
  {
    id: "cinema",
    label: "Rạp",
    align: "center",
    minWidth: 100,
  },
  { id: "ticket-cost", label: "Giá vé", align: "center", minWidth: 120 },
  {
    id: "selected-seats",
    label: "Ghế đã đặt",
    align: "center",
    minWidth: 195,
  },
];

const TransactionHistory = () => {
  const { content } = useSelector((rootReducer) => rootReducer.userProfile.data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const rows = content?.thongTinDatVe;

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderTableBody = () =>
    (rowsPerPage > 0
      ? rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : rows
    )?.map((row) => {
      let seats = row?.danhSachGhe;
      const { tenCumRap, tenHeThongRap } = seats[0];

      seats = seats.map((seat, idx) => {
        // Number of seat rows in ticket booking page
        const nRow = 16;
        const seatIndicator = ALPHABET[Math.floor((+seat.tenGhe - 1) / nRow)];
        const seatIdx = ((+seat.tenGhe - 1) % nRow) + 1;
        const seatCode = seatIndicator + seatIdx;

        const isLastSeat = idx === seats.length - 1;

        return (
          <span key={idx}>
            {seatCode}
            {isLastSeat ? "" : ", "}
          </span>
        );
      });

      return (
        <TableRow key={row.ngayDat}>
          <TableCell align="center">{row?.maVe}</TableCell>
          <TableCell align="center">{row?.tenPhim}</TableCell>
          <TableCell align="center">
            {moment(row?.ngayDat).format("HH:mm")}, {moment(row?.ngayDat).format("DD/MM/YYY")}
          </TableCell>
          <TableCell align="center">{row.thoiLuongPhim} phút</TableCell>
          <TableCell align="center">
            {tenHeThongRap}, {tenCumRap}
          </TableCell>
          <TableCell align="center">{row.giaVe.toLocaleString()} VNĐ</TableCell>
          <TableCell align="center">{seats}</TableCell>
        </TableRow>
      );
    });

  return (
    <TableContainer component={Paper} className="transaction-history">
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                className="transaction-history__table-head-cell"
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{renderTableBody()}</TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default TransactionHistory;
