import * as actType from "../constants/ticketBooking";

const initialState = {
  ticketBookingDetails: {
    data: null,
    loading: false,
    error: "",
  },
  bookTicket: {
    loading: false,
    error: "",
  },
  selectedSeats: [],
  modal: { open: false, title: "", children: [], buttonContent: "Chấp nhận", path: "" },
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
        selectedSeats: [],
      };

    // Book ticket
    case actType.BOOK_TICKET_REQUEST:
      return {
        ...state,
        bookTicket: {
          loading: true,
          error: "",
        },
      };

    case actType.BOOK_TICKET_FAIL:
      return {
        ...state,
        bookTicket: {
          loading: false,
          error: payload,
        },
      };

    case actType.BOOK_TICKET_SUCCESS:
      if (!state.selectedSeats.length) {
        return {
          ...state,
          bookTicket: {
            loading: false,
            error: "",
          },
          modal: {
            ...state.modal,
            open: true,
            title: "Thông báo",
            children: ["Vui lòng chọn ít nhất một chỗ ngồi! Bạn có thể mua được tối đa 5 ghế."],
            path: "",
          },
        };
      }

      return {
        ...state,
        bookTicket: {
          loading: false,
          error: "",
        },
        modal: {
          ...state.modal,
          open: true,
          title: "Thông báo",
          children: [
            "Đặt vé thành công!",
            "Chúc bạn có trải nghiệm xem phim vui vẻ tại Finnkino Cinema",
          ],
          path: "/",
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
        return {
          ...state,
          modal: {
            ...state.modal,
            open: true,
            title: "Thông báo",
            children: [
              "Bạn chỉ có thể mua được tối đa 5 ghế.",
              "Vui lòng liên hệ supports@finnkino.com để được hỗ trợ tốt hơn.",
            ],
            path: "",
          },
        };
      }

      selectedSeats.push(payload);

      return { ...state, selectedSeats };

    // Close modal
    case actType.CLOSE_MODAL:
      return { ...state, modal: { ...state.modal, open: false } };
    default:
      return state;
  }
};

export default ticketBookingReducer;
