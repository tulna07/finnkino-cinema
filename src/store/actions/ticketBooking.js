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
 * Book ticket
 */
const actBookTicket = (ticket) => {
  return (dispatch) => {
    dispatch(actBookTicketRequest());

    (async () => {
      try {
        await ticketBookingApi.bookTicket(ticket);
        dispatch(actBookTicketSuccess());
      } catch (error) {
        dispatch(actBookTicketFail(error));
      }
    })();
  };
};

const actBookTicketRequest = () => ({
  type: actType.BOOK_TICKET_REQUEST,
});

const actBookTicketFail = (error) => ({
  type: actType.BOOK_TICKET_FAIL,
  payload: error,
});

const actBookTicketSuccess = () => ({
  type: actType.BOOK_TICKET_SUCCESS,
});

/*
 * Choose seats
 */
const actChooseSeat = (seat) => ({
  type: actType.CHOOSE_SEAT,
  payload: seat,
});

/*
 * Close modal
 */
const actCloseModal = () => ({
  type: actType.CLOSE_MODAL,
});

export { actGetTicketBookingDetails, actBookTicket, actChooseSeat, actCloseModal };
