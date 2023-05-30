import axios from "axios";
import { SHOP_DATA, SHOP_DATA_ERROR, ADD_TO_CART, ADD_CART_INC, ADD_CART_DEC } from "../constants";

export const getShopData = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/shop");
    dispatch({
      type: SHOP_DATA,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    dispatch({
      type: SHOP_DATA_ERROR,
      payload: errors,
    });
  }
};

export const addToCart = (data, type = 'ADD_TO_CART')=>{
  return{
    type: type,
    payload: data,
  }
}