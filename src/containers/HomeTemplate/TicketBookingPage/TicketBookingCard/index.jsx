import { useSelector } from "react-redux";

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

// Components
import Loader from "@/components/Loader";

// Scss
import "./style.scss";

const TicketBookingCard = () => {
  const ticketBooking = useSelector((rootReducer) => rootReducer.ticketBooking);

  const movie = ticketBooking?.ticketBookingDetails?.thongTinPhim;
  const loading = ticketBooking?.loading;

  return (
    <Card className="ticket-booking-card" elevation={24} square>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Movie image */}
          <CardMedia
            className="ticket-booking-card__media"
            component="img"
            alt="movie picture"
            image={movie?.hinhAnh}
          />
          {/* Card content */}
          <CardContent className="ticket-booking-card__content">
            {/* Movie name */}
            <Typography className="ticket-booking-card__movie-name" component="h2" variant="h5">
              {movie?.tenPhim}
            </Typography>
            {/* Booking details */}
            <List>
              <ListItem className="ticket-booking-card__booking-details">
                <ListItemText disableTypography>
                  <strong>Rạp:</strong> {movie?.tenCumRap} | {movie?.tenRap}
                </ListItemText>
              </ListItem>
              <ListItem className="ticket-booking-card__booking-details">
                <ListItemText disableTypography>
                  <strong>Địa chỉ:</strong> {movie?.diaChi}
                </ListItemText>
              </ListItem>
              <ListItem className="ticket-booking-card__booking-details">
                <ListItemText disableTypography>
                  <strong>Ngày chiếu:</strong> {movie?.gioChieu} | {movie?.ngayChieu}
                </ListItemText>
              </ListItem>
            </List>
            <Divider className="ticket-booking-card__divider" />
            {/* Booked Seats */}
            <List>
              <ListItem className="ticket-booking-card__booking-details">
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
          </CardActions>{" "}
        </>
      )}
    </Card>
  );
};

export default TicketBookingCard;
