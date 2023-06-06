import { combineReducers } from "redux";
import shop from "./shop.reducer";
import cart from "./cart.reducer";
import login from "./loginAuth.reducer";
import order from "./order.reducer"

const rootReducer = combineReducers({
  shop,
  cart,
  login,
  order,
});

export default rootReducer;
