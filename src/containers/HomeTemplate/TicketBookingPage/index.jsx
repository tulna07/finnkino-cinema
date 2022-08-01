import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useScrollToTop } from "@/hooks";

// Material UI
import { Box, Container, Grid, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

// Components
import SeatSelector from "./SeatSelector";
import TicketBookingCard from "./TicketBookingCard";
import TicketBookingHistory from "./TicketBookingHistory";

// Redux actions
import { actGetTicketBookingDetails } from "@/store/actions/ticketBooking";

// Scss
import "./style.scss";

const TicketBookingPage = () => {
  const [value, setValue] = useState("1");
  useScrollToTop();
  const { scheduleId } = useParams();
  const dispatch = useDispatch();

  const handleChangeTab = (event, newValue) => setValue(newValue);

  useEffect(() => {
    dispatch(actGetTicketBookingDetails(scheduleId));
  }, []);

  return (
    <Box className="container ticket-booking-page " component="section">
      <Container maxWidth="xl">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1 }}>
            {/* Tab titles */}
            <TabList
              onChange={handleChangeTab}
              aria-label="lab tabs"
              TabIndicatorProps={{ style: { backgroundColor: "var(--primary)" } }}
            >
              <Tab className="tab-ticket-booking" label="1 Chọn ghế & Thanh toán" value="1" />
              <Tab className="tab-ticket-booking" label="2 Lịch sử đặt vé" value="2" />
            </TabList>
          </Box>
          {/* Tabs content */}
          {/* Ticket booking  */}
          <TabPanel value="1">
            <Grid container spacing={3}>
              <Grid item md={8.5} xs={12}>
                <SeatSelector />
              </Grid>
              <Grid item md={3.5} xs={12}>
                <TicketBookingCard />
              </Grid>
            </Grid>
          </TabPanel>
          {/* Ticket booking history  */}
          <TabPanel value="2">
            <TicketBookingHistory />
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
};

export default TicketBookingPage;
