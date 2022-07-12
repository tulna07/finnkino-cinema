import { combineReducers } from "redux";

// Reducers
import movieListReducer from "./movieList";

const rootReducer = combineReducers({
  movieList: movieListReducer,
});

export default rootReducer;
