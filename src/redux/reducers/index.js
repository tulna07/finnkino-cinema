import { combineReducers } from "redux";

// Reducers
import movieListReducer from "./movieList";
import movieBannerReducer from "./movieBanner";
import movieDetailsReducer from "./movieDetails";
import cinemaSystemReducer from "./cinemaSystem";
import movieManagementReducer from "./movieManagement";
import userListReducer from "./userManagement";
import userDetailsReducer from "./userDetails";

const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieBanner: movieBannerReducer,
  movieDetails: movieDetailsReducer,
  cinemaSystem: cinemaSystemReducer,
  movieManagement: movieManagementReducer,
  userList: userListReducer,
  userDetails: userDetailsReducer,
});

export default rootReducer;
