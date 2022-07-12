import { combineReducers } from "redux";

import movieBannerReducer from "@/containers/HomeTemplate/HomePage/Carousel/reducer";

const rootReducer = combineReducers({
  movieBannerReducer,
});

export default rootReducer;
