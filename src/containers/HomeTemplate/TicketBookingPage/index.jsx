// Material UI
import { Box, Container, Grid } from "@mui/material";

// Components
import TicketBookingCard from "./TicketBookingCard";
import SeatSelector from "./SeatSelector";

// Scss
import "./style.scss";

const TicketBookingPage = () => {
  return (
    <Box className="ticket-booking-page" component="section">
      <Container maxWidth={false} sx={{ maxWidth: "90%" }}>
        <Grid container spacing={7}>
          <Grid item xs={8}>
            <SeatSelector />
          </Grid>
          <Grid item xs={4}>
            <TicketBookingCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TicketBookingPage;
