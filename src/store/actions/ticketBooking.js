import * as actType from "../constants/ticketBooking";
import { ticketBookingApi } from "@/api";

/*
 * Fetch ticket booking details
 */
const actGetTicketBookingDetails = (showtimeCode) => {
  return (dispatch) => {
    dispatch(actTicketBookingDetailsRequest());

    (async () => {
      try {
        const params = { maLichChieu: showtimeCode };
        const ticketBookingDetails = await ticketBookingApi.getTicketOfficeList(params);
        dispatch(actTicketBookingDetailsSuccess(ticketBookingDetails));
      } catch (error) {
        dispatch(actTicketBookingDetailsFail(error));
      }
    })();
  };
};

const actTicketBookingDetailsRequest = () => ({
  type: actType.GET_TICKET_BOOKING_DETAILS_REQUEST,
});

const actTicketBookingDetailsFail = (error) => ({
  type: actType.GET_TICKET_BOOKING_DETAILS_FAIL,
  payload: error,
});

const actTicketBookingDetailsSuccess = (data) => ({
  type: actType.GET_TICKET_BOOKING_DETAILS_SUCCESS,
  payload: data,
});

/*
 * Book tickets
 */

/*
 * Choose seats
 */
const actChooseSeat = (seat) => ({
  type: actType.CHOOSE_SEAT,
  payload: seat,
});

export { actGetTicketBookingDetails, actChooseSeat };
