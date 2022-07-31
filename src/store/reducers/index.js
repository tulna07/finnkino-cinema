import { combineReducers } from "redux";

// Reducers
import movieListReducer from "./movieList";
import movieBannerReducer from "./movieBanner";
import movieDetailsReducer from "./movieDetails";
import cinemaSystemReducer from "./cinemaSystem";
import ticketBookingReducer from "./ticketBooking";

const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieBanner: movieBannerReducer,
  movieDetails: movieDetailsReducer,
  cinemaSystem: cinemaSystemReducer,
  ticketBooking: ticketBookingReducer,
});

export default rootReducer;
