// Material UI
import { Box, Typography, Grid } from "@mui/material";

// Scss
import "./style.scss";

const SeatSelector = () => {
  const arr = [];
  for (let i = 0; i < 160; ++i) {
    arr.push(
      <Grid item xs={1}>
        <Box className="seat-selector__seat">{i + 1}</Box>
      </Grid>,
    );
  }

  return (
    <Box className="seat-selector">
      <Typography className="seat-selector__title" variant="h4">
        CHỌN GHẾ:
      </Typography>
      <Box className="seat-selector__map">
        <Box className="seat-selector__screen"></Box>
        <Typography className="seat-selector__screen-title" variant="h5" color="white">
          Màn hình
        </Typography>
        <Grid className="seat-selector__map-grid" container columns={16} spacing={1}>
          {arr}
        </Grid>
      </Box>
    </Box>
  );
};

export default SeatSelector;
