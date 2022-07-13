import { combineReducers } from "redux";

// Reducers
import movieListReducer from "./movieList";
import movieBannerReducer from "./movieBanner";

const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieBanner: movieBannerReducer,
});

export default rootReducer;
