import { useDispatch, useSelector } from "react-redux";

// Material UI
import { Box, Grid } from "@mui/material";

// Constants
import { ALPHABET } from "@/constants";

import { actChooseSeat } from "@/store/actions/ticketBooking";

// Scss
import "./style.scss";

const SeatGrid = () => {
  const { ticketBookingDetails, selectedSeats } = useSelector(
    (rootReducer) => rootReducer.ticketBooking,
  );

  const dispatch = useDispatch();

  const seats = ticketBookingDetails.data?.danhSachGhe;

  if (!seats || seats.length < 1) return;

  const NO_SEATS_ON_ROWS = 16;
  const NO_SEAT_INDICATORS_ON_ROWS = 2;
  const GRID_COLS = NO_SEATS_ON_ROWS + NO_SEAT_INDICATORS_ON_ROWS;
  const GRID_ROWS = seats.length / NO_SEATS_ON_ROWS;
  const NO_SEAT_INDICATORS = NO_SEAT_INDICATORS_ON_ROWS * GRID_ROWS;

  // Handle choose seat
  const handleChooseSeat = (id, price, code) => {
    const seat = { id, price, code };
    dispatch(actChooseSeat(seat));
  };

  const gridItems = [];
  for (let gridCell = 0, row = 0; gridCell < seats.length + NO_SEAT_INDICATORS; ++gridCell) {
    const rowHead = gridCell % GRID_COLS === 0;
    const rowTail = gridCell % GRID_COLS === GRID_COLS - 1;

    const isSeat = !rowHead && !rowTail;
    if (isSeat) {
      const seatNum = gridCell % GRID_COLS;
      const seatIdx = gridCell - (row * 2 + 1);
      const seatCode = ALPHABET[row] + seatNum;

      // Get seat details
      const {
        maGhe: seatId,
        maRap: cinemaId,
        loaiGhe: seatType,
        giaVe: seatPrice,
        daDat: sold,
        taiKhoanNguoiDat: username,
      } = seats[seatIdx];

      // Select type of seat
      let seatTypeClass = "selectable";

      if (seatType === "Vip") {
        seatTypeClass = "vip";
      }

      const idx = selectedSeats.findIndex((selectedSeat) => selectedSeat.id === seatId);
      if (idx !== -1) {
        seatTypeClass = "selected";
      }

      if (sold) {
        seatTypeClass = "sold";
      }

      // Render seat
      gridItems.push(
        <Grid item xs={1} key={seatId}>
          <Box className={`seat-selector__seat-wrapper ${seatTypeClass}`}>
            <Box
              className="seat-selector__seat"
              onClick={() => handleChooseSeat(seatId, seatPrice, seatCode)}
            >
              {sold ? "X" : seatNum}
            </Box>
          </Box>
        </Grid>,
      );

      continue;
    }

    const indicatorPosition = rowHead
      ? "seat-selector__indicator-wrapper--left"
      : "seat-selector__indicator-wrapper--right";

    // Render seat indicator
    gridItems.push(
      <Grid item xs={1} key={gridCell}>
        <Box className={`seat-selector__indicator-wrapper ${indicatorPosition}`}>
          <Box className="seat-selector__indicator">{ALPHABET[rowTail ? row++ : row]}</Box>
        </Box>
      </Grid>,
    );
  }

  return gridItems;
};

export default SeatGrid;
