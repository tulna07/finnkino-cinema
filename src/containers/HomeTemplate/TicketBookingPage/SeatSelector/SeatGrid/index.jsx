// Material UI
import { Box, Grid } from "@mui/material";

// Constants
import { ALPHABET } from "@/constants";

// Scss
import "./style.scss";

const NO_SEATS_ON_ROWS = 16;
const NO_SEAT_INDICATORS_ON_ROWS = 2;
const GRID_COLS = NO_SEATS_ON_ROWS + NO_SEAT_INDICATORS_ON_ROWS;

const SeatGrid = ({ seats }) => {
  if (!seats || seats.length < 1) return;

  const GRID_ROWS = seats.length / NO_SEATS_ON_ROWS;
  const NO_SEAT_INDICATORS = NO_SEAT_INDICATORS_ON_ROWS * GRID_ROWS;

  const gridItems = [];
  for (let gridCell = 0, row = 0; gridCell < seats.length + NO_SEAT_INDICATORS; ++gridCell) {
    const rowHead = gridCell % GRID_COLS === 0;
    const rowTail = gridCell % GRID_COLS === GRID_COLS - 1;
    const seatId = gridCell % GRID_COLS;

    const indicatorPosition = rowHead
      ? "seat-selector__indicator-wrapper--left"
      : "seat-selector__indicator-wrapper--right";

    gridItems.push(
      <Grid item xs={1} key={gridCell}>
        {rowHead || rowTail ? (
          <Box className={`seat-selector__indicator-wrapper ${indicatorPosition}`}>
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

export default SeatGrid;
