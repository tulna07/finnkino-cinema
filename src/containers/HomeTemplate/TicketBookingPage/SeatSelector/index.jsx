import { useSelector } from "react-redux";

// Material UI
import { Box, Typography, Grid } from "@mui/material";

// Components
import Loader from "@/components/Loader";
import SeatGrid from "./SeatGrid";
import SeatNote from "./SeatNote";

// Scss
import "./style.scss";

const SeatSelector = () => {
  const { loading } = useSelector((rootReducer) => rootReducer.ticketBooking.ticketBookingDetails);

  return (
    <Box className="seat-selector">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Typography className="seat-selector__title" variant="h4">
            Chọn Ghế:
          </Typography>
          <Box
            className="seat-selector__map-wrapper"
            sx={{ overflow: { lg: "visible", xs: "scroll" } }}
          >
            <Grid
              container
              className="seat-selector__map"
              sx={{ width: { lg: "100%", xs: "750px" } }}
            >
              <Grid item xs={12}>
                <Box className="seat-selector__screen"></Box>
                <Typography className="seat-selector__screen-title" variant="h5" color="white">
                  Màn hình
                </Typography>
                <Grid className="seat-selector__map-grid" container columns={18} spacing={1}>
                  <SeatGrid />
                </Grid>
                <Grid className="seat-selector__seat-notes-container" container columns={15}>
                  <SeatNote />
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
