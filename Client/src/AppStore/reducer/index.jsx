import { combineReducers } from "redux";
import shop from "./shop.reducer";

const rootReducer = combineReducers({
  shop,
});

export default rootReducer;
