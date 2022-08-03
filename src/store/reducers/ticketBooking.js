import * as actType from "../constants/ticketBooking";

const initialState = {
  ticketBookingDetails: {
    data: null,
    loading: false,
    error: "",
  },
  ticketBooking: {
    loading: false,
    error: "",
  },
  selectedSeats: [],
};

const ticketBookingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Fetch ticket booking details
    case actType.GET_TICKET_BOOKING_DETAILS_REQUEST:
      return {
        ...state,
        ticketBookingDetails: {
          data: null,
          loading: true,
          error: "",
        },
      };

    case actType.GET_TICKET_BOOKING_DETAILS_FAIL:
      return {
        ...state,
        ticketBookingDetails: {
          data: null,
          loading: false,
          error: payload,
        },
      };

    case actType.GET_TICKET_BOOKING_DETAILS_SUCCESS:
      return {
        ...state,
        ticketBookingDetails: {
          data: payload,
          loading: false,
          error: "",
        },
      };

    // Choose seat
    case actType.CHOOSE_SEAT:
      const selectedSeats = [...state.selectedSeats];

      const idx = selectedSeats.findIndex((selectedSeat) => selectedSeat.id === payload.id);
      if (idx !== -1) {
        selectedSeats.splice(idx, 1);
        return { ...state, selectedSeats };
      }

      if (selectedSeats.length === 5) {
        alert("Không được đặt quá 5 vé!");
        return { ...state };
      }

      selectedSeats.push(payload);

      return { ...state, selectedSeats };
    default:
      return state;
  }
};

export default ticketBookingReducer;
