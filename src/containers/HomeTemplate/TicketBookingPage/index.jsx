import { useScrollToTop } from "@/hooks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// Material UI
import { Box, Container, Grid } from "@mui/material";

// Components
import TicketBookingCard from "./TicketBookingCard";
import SeatSelector from "./SeatSelector";
import Modal from "@/components/Modal";

// Redux actions
import { actGetTicketBookingDetails, actCloseModal } from "@/store/actions/ticketBooking";

// Scss
import "./style.scss";

const TicketBookingPage = () => {
  useScrollToTop();
  const { scheduleId } = useParams();
  const dispatch = useDispatch();
  const modalProps = useSelector((rootReducer) => rootReducer.ticketBooking.modal);

  useEffect(() => {
    dispatch(actGetTicketBookingDetails(scheduleId));
  }, []);

  return (
    <Box className="container ticket-booking-page " component="section">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item md={8.5} xs={12}>
            <SeatSelector />
          </Grid>
          <Grid item md={3.5} xs={12}>
            <TicketBookingCard />
          </Grid>
        </Grid>
        <Modal actCloseModal={actCloseModal} modalProps={modalProps} />
      </Container>
    </Box>
  );
};

export default TicketBookingPage;
