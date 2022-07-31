import * as actType from "../constants/ticketBooking";

const initialState = {
  ticketBookingDetails: null,
  loading: null,
  error: "",
  selectedSeat: [],
};

const ticketBookingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actType.GET_TICKET_BOOKING_DETAILS_REQUEST:
      return { ...state, ticketBookingDetails: null, loading: true, error: "" };
    case actType.GET_TICKET_BOOKING_DETAILS_SUCCESS:
      return { ...state, ticketBookingDetails: payload, loading: false, error: "" };
    case actType.GET_TICKET_BOOKING_DETAILS_FAIL:
      return {
        ...state,
        ticketBookingDetails: null,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default ticketBookingReducer;
