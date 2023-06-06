import axios from "axios";
import { ORDER, ORDER_ERROR } from "../constants";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const placeOrder = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(formData.route , formData, config);
    dispatch({
      type: ORDER,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.message;
    dispatch({
      type: ORDER_ERROR,
      payload: errors,
    });
  }
};

