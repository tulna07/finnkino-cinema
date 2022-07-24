// Material UI
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

// Scss
import "./style.scss";

const bookingInfoItems = [
  {
    header: "Rạp",
    content: "BHD Star Cineplex - 3/2",
  },
  {
    header: "Địa chỉ:",
    content: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
  },
  {
    header: "Ngày chiếu:",
    content: "18/08/2021 - 09:08 - Rạp 4",
  },
];

const TicketBookingCard = () => {
  const BookingInfoItems = bookingInfoItems?.map((item, idx) => (
    <ListItem sx={{ px: 0 }}>
      <ListItemText disableTypography>
        <strong>{item.header}:</strong> {item.content}
      </ListItemText>
    </ListItem>
  ));

  return (
    <Card className="ticket-booking-card" elevation={24} square>
      {/* Movie image */}
      <CardMedia
        className="ticket-booking-card__media"
        component="img"
        alt="movie picture"
        image="https://cdn.galaxycine.vn/media/2022/6/13/1350x900---copy_1655112805440.jpg"
      />
      {/* Card content */}
      <CardContent className="ticket-booking-card__content">
        {/* Movie name */}
        <Typography className="ticket-booking-card__movie-name" component="h2" variant="h5">
          THOR: TÌNH YÊU VÀ SẤM SÉT
        </Typography>
        {/* Booking info */}
        <List>{BookingInfoItems}</List>
        <Divider className="ticket-booking-card__divider" />
        {/* Seats booked  */}
        <List>
          <ListItem sx={{ px: 0 }}>
            <ListItemText disableTypography>
              <strong>Ghế:</strong> G1, A2, A3, H5
            </ListItemText>
          </ListItem>
        </List>
        <Divider className="ticket-booking-card__divider" />
        {/* Total payment */}
        <Typography variant="h5" sx={{ mt: "13px" }}>
          <strong>Tổng:</strong> <strong style={{ color: "var(--primary)" }}>0 VNĐ</strong>
        </Typography>
      </CardContent>
      {/* Book ticket */}
      <CardActions sx={{ justifyContent: "center" }}>
        <Button className="ticket-booking-card__btn-booking" variant="contained">
          Đặt Vé
        </Button>
      </CardActions>
    </Card>
  );
};

export default TicketBookingCard;
