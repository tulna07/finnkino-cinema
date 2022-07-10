import { combineReducers } from "redux";

// Reducers
import hobbyReducer from "./hobby";

const rootReducer = combineReducers({
  hobby: hobbyReducer,
});

export default rootReducer;
