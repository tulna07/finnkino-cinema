import * as actType from "../constants/ticketBooking";
import { ticketBookingApi } from "@/api";

const actGetTicketBookingDetails = (showtimeCode) => {
  return (dispatch) => {
    dispatch(actTicketBookingDetailsRequest());

    (async () => {
      try {
        const params = { maLichChieu: showtimeCode };
        const movieList = await ticketBookingApi.getTicketOfficeList(params);
        dispatch(actTicketBookingDetailsSuccess(movieList));
      } catch (error) {
        dispatch(actTicketBookingDetailsFail(error));
      }
    })();
  };
};

const actTicketBookingDetailsRequest = () => ({
  type: actType.GET_TICKET_BOOKING_DETAILS_REQUEST,
});

const actTicketBookingDetailsSuccess = (data) => ({
  type: actType.GET_TICKET_BOOKING_DETAILS_SUCCESS,
  payload: data,
});

const actTicketBookingDetailsFail = (error) => ({
  type: actType.GET_TICKET_BOOKING_DETAILS_FAIL,
  payload: error,
});

export default actGetTicketBookingDetails;
