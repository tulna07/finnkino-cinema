import { useSelector } from "react-redux";

// Material UI
import { Box, Typography, Grid, Stack } from "@mui/material";

// Scss
import "./style.scss";

// Components
import Loader from "@/components/Loader";

// Constants
import { ALPHABET } from "@/constants";

const NO_SEATS_ON_ROWS = 16;
const NO_SEAT_INDICATORS_ON_ROWS = 2;
const GRID_COLS = NO_SEATS_ON_ROWS + NO_SEAT_INDICATORS_ON_ROWS;

const seatNoteItems = [
  {
    type: "selected",
    content: "Ghế đang chọn",
  },
  {
    type: "sold",
    content: "Ghế đã bán",
  },
  {
    type: "vip",
    content: "Ghế VIP",
  },
  {
    type: "selectable",
    content: "Có thể chọn",
  },
  {
    type: "unavailable",
    content: "Không thể chọn",
  },
];

const SeatSelector = () => {
  const ticketBooking = useSelector((rootReducer) => rootReducer.ticketBooking);

  const seats = ticketBooking?.ticketBookingDetails?.danhSachGhe;
  const loading = ticketBooking?.loading;

  const renderGridItems = () => {
    if (!seats || seats.length < 1) return;

    const GRID_ROWS = seats.length / NO_SEATS_ON_ROWS;
    const NO_SEAT_INDICATORS = NO_SEAT_INDICATORS_ON_ROWS * GRID_ROWS;

    const gridItems = [];
    for (let gridCell = 0, row = 0; gridCell < seats.length + NO_SEAT_INDICATORS; ++gridCell) {
      const rowHead = gridCell % GRID_COLS === 0;
      const rowTail = gridCell % GRID_COLS === GRID_COLS - 1;
      const seatId = gridCell % GRID_COLS;

      gridItems.push(
        <Grid item xs={1} key={gridCell}>
          {rowHead || rowTail ? (
            <Box
              className={`seat-selector__indicator-wrapper ${
                rowHead
                  ? "seat-selector__indicator-wrapper--left"
                  : "seat-selector__indicator-wrapper--right"
              }`}
            >
              <Box className="seat-selector__indicator">{ALPHABET[rowTail ? row++ : row]}</Box>
            </Box>
          ) : (
            <Box className="seat-selector__seat">{seatId}</Box>
          )}
        </Grid>,
      );
    }

    return gridItems;
  };

  const SeatNoteItems = () =>
    seatNoteItems?.map((item, idx) => (
      <Grid item xs={3} key={idx}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
          <Box className={`seat-selector__seat-notes ${item.type}`}></Box>
          <Typography>{item.content}</Typography>
        </Stack>
      </Grid>
    ));

  return (
    <Box className="seat-selector">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Typography className="seat-selector__title" variant="h4">
            CHỌN GHẾ:
          </Typography>

          <Box className="seat-selector__map" sx={{ overflow: { lg: "visible", xs: "scroll" } }}>
            <Grid
              container
              className="seat-selector__map-wrapper"
              sx={{ width: { lg: "100%", xs: "750px" } }}
            >
              <Grid item xs={12}>
                <Box className="seat-selector__screen"></Box>
                <Typography className="seat-selector__screen-title" variant="h5" color="white">
                  Màn hình
                </Typography>
                <Grid className="seat-selector__map-grid" container columns={GRID_COLS} spacing={1}>
                  {renderGridItems()}
                </Grid>
                <Grid className="seat-selector__seat-notes-container" container columns={15}>
                  <SeatNoteItems />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
};

export default SeatSelector;
