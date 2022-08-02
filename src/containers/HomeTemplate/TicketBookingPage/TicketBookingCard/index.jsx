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
  const { ticketBookingDetails, selectedSeats } = useSelector(
    (rootReducer) => rootReducer.ticketBooking,
  );

  const movie = ticketBookingDetails.data?.thongTinPhim;
  const loading = ticketBookingDetails.loading;

  const renderSelectedSeats = () =>
    selectedSeats?.map((selectedSeat, idx) => {
      const endLine = idx === selectedSeats.length - 1;
      return (
        <span>
          {selectedSeat.code}
          {endLine ? "" : ", "}
        </span>
      );
    });

  const renderPriceTotal = () => {
    const priceTotal = selectedSeats?.reduce(
      (priceTotal, selectedSeat) => priceTotal + selectedSeat.price,
      0,
    );

    return priceTotal.toLocaleString();
  };

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
                  <strong>Ghế:</strong> {renderSelectedSeats()}
                </ListItemText>
              </ListItem>
            </List>
            <Divider className="ticket-booking-card__divider" />
            {/* Total payment */}
            <Typography className="ticket-booking-card__total" variant="h5" sx={{ mt: "13px" }}>
              <strong>Tổng:</strong>{" "}
              <strong style={{ color: "var(--primary)" }}>{renderPriceTotal()} VNĐ</strong>
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
