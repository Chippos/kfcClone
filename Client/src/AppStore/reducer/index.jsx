import { combineReducers } from "redux";
import shop from "./shop.reducer";
import cart from './cart.reducer';

const rootReducer = combineReducers({
  shop,
  cart,
});

export default rootReducer;
