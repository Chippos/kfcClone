import { combineReducers } from "redux";
import shop from "./shop.reducer";
import cart from "./cart.reducer";
import login from "./loginAuth.reducer";
import order from "./order.reducer"
import single from "./single.reducer"
const rootReducer = combineReducers({
  shop,
  cart,
  login,
  order,
  single,
});

export default rootReducer;
