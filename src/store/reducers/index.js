import { combineReducers } from "redux";

// Reducers
import movieListReducer from "./movieList";
import movieBannerReducer from "./movieBanner";
import movieDetailsReducer from "./movieDetails";
import cinemaSystemReducer from "./cinemaSystem";
import movieManagementReducer from "./movieManagement";
import userDetailsReducer from "./userDetails";
import userManagementReducer from "./userManagement";
import userListReducer from "./userList";
import ticketBookingReducer from "./ticketBooking";
import userProfileReducer from "./userProfile";

const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieBanner: movieBannerReducer,
  movieDetails: movieDetailsReducer,
  cinemaSystem: cinemaSystemReducer,
  movieManagement: movieManagementReducer,
  userDetails: userDetailsReducer,
  userManagement: userManagementReducer,
  userList: userListReducer,
  ticketBooking: ticketBookingReducer,
  userProfile: userProfileReducer,
});

export default rootReducer;
