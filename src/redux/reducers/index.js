import { combineReducers } from "redux";

// Reducers
import movieListReducer from "./movieList";
import movieBannerReducer from "./movieBanner";
import cinemaSystemReducer from "./cinemaSystem";

const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieBanner: movieBannerReducer,
  cinemaSystem: cinemaSystemReducer,
});

export default rootReducer;
