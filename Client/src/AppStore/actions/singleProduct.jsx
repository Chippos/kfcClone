import axios from "axios";
import { SINGLE_PRODUCT, SINGLE_PRODUCT_ERROR } from "../constants";


export const findSingleProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/shop/${id}`);
    dispatch({
      type: SINGLE_PRODUCT,
      payload: res.data,
    });
    return{
      res
    }
  } catch (error) {
    const errors = error.message;
    dispatch({
      type: SINGLE_PRODUCT_ERROR,
      payload: errors,
    });
  }
};
