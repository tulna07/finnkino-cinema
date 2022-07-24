// Material UI
import { Box, Typography, Grid, Stack } from "@mui/material";

// Scss
import "./style.scss";

const SeatSelector = () => {
  const arr = [];
  for (let i = 0; i < 160; ++i) {
    arr.push(
      <Grid item xs={1} key={i}>
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
      <Grid
        className="seat-selector__seat-notes-container"
        container
        sx={{ color: "black", px: 5, mt: 2 }}
      >
        <Grid item xs={3}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
            <Box className="seat-selector__seat-notes seat-selector__seat-notes--selected"></Box>
            <Typography>Ghế đang chọn</Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
            <Box className="seat-selector__seat-notes seat-selector__seat-notes--sold"></Box>
            <Typography>Ghế đã bán</Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
            <Box className="seat-selector__seat-notes seat-selector__seat-notes--selectable"></Box>
            <Typography>Có thể chọn</Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
            <Box className="seat-selector__seat-notes seat-selector__seat-notes--unavailable"></Box>
            <Typography>Không thể chọn</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SeatSelector;
