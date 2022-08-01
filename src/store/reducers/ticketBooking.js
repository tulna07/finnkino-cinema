import * as actType from "../constants/ticketBooking";

const initialState = {
  ticketBookingDetails: null,
  loading: null,
  error: "",
  selectedSeats: [],
};

const ticketBookingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Fetch ticket booking details
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

    // Choose seat
    case actType.CHOOSE_SEAT:
      const selectedSeats = [...state.selectedSeats];

      const idx = selectedSeats.findIndex((selectedSeat) => selectedSeat.id === payload.id);
      if (idx !== -1) {
        selectedSeats.splice(idx, 1);
        return { ...state, selectedSeats };
      }

      selectedSeats.push(payload);

      return { ...state, selectedSeats };
    default:
      return state;
  }
};

export default ticketBookingReducer;
