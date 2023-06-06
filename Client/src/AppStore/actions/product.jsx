import axios from "axios";
import { ADD_PRODUCT, ADD_PRODUCT_ERROR } from "../constants";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const addProduct = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("api/", formData, config);
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.message;
    dispatch({
      type: ADD_PRODUCT_ERROR,
      payload: errors,
    });
  }
};
