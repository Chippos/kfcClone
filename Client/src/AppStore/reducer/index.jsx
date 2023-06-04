import { combineReducers } from "redux";
import shop from "./shop.reducer";
import cart from "./cart.reducer";
import login from "./loginAuth.reducer";

const rootReducer = combineReducers({
  shop,
  cart,
  login,
});

export default rootReducer;
